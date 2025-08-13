const OpenAI = require('openai');

// Support both OpenAI and DeepSeek APIs
const isDeepSeek = process.env.USE_DEEPSEEK === 'true';
const apiKey = isDeepSeek ? process.env.DEEPSEEK_API_KEY : process.env.OPENAI_API_KEY;
const baseURL = isDeepSeek ? 'https://api.deepseek.com/v1' : undefined;

// Early validation to avoid confusing upstream errors
if (!apiKey || /your_?openai_?api_?key_?here/i.test(apiKey)) {
  console.error(
    `❌ AI API key is not configured correctly. Set ${isDeepSeek ? 'DEEPSEEK_API_KEY' : 'OPENAI_API_KEY'} in server/config/.env.`
  );
}

const openai = new OpenAI({
  apiKey: apiKey,
  baseURL: baseURL,
});

function toList(value) {
  if (Array.isArray(value)) return value;
  if (!value) return [];
  return String(value)
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
}

function generateLocalSuggestions(relationshipType, personalityTraits, budget) {
  const traits = toList(personalityTraits);
  const traitsHint = traits.length ? ` for someone who is ${traits.join(', ')}` : '';
  const budgetText = budget ? ` (around $${budget})` : '';

  const suggestions = [
    `🎁 Insulated Stainless Travel Mug - Everyday useful for commutes${budgetText}`,
    `🎁 High-Quality Scented Candle - Calm, long-burning, neutral fragrance${budgetText}`,
    `🎁 Hardcover Notebook + Gel Pens - For notes, plans, and ideas${budgetText}`,
    `🎁 Cozy Throw Blanket - Soft, machine-washable comfort for home${budgetText}`,
    `🎁 Gift Card to Favorite Coffee Shop - Always appreciated${budgetText}`,
  ];

  // Slight tailoring by trait keywords
  const lower = traits.map(t => t.toLowerCase());
  if (lower.includes('tech') || lower.includes('obsessed')) {
    suggestions[0] = `🎁 20W USB-C Fast Charger - Compact, reliable daily tech upgrade${budgetText}`;
  }
  if (lower.includes('coffee')) {
    suggestions[4] = `🎁 Premium Whole Bean Coffee Sampler - Fresh roasts to explore${budgetText}`;
  }
  if (lower.includes('introvert')) {
    suggestions[1] = `🎁 Ambient Light Salt Lamp - Warm glow for a cozy corner${budgetText}`;
  }
  if (lower.includes('gym')) {
    suggestions[2] = `🎁 Resistance Band Set - Compact, versatile home workouts${budgetText}`;
  }

  // Add relationship hint in the first suggestion line subtly
  if (relationshipType) {
    suggestions[0] = suggestions[0].replace(' - ', ` - For your ${relationshipType.toLowerCase()}${traitsHint}, `);
  }

  return suggestions;
}

const generateGiftSuggestions = async (relationshipType, personalityTraits, budget) => {
  // If key is missing or placeholder, immediately use local fallback
  if (!apiKey || /your_?openai_?api_?key_?here/i.test(apiKey)) {
    console.warn('⚠️ Using local fallback suggestions due to missing/placeholder API key');
    return generateLocalSuggestions(relationshipType, personalityTraits, budget);
  }

  try {
    const budgetText = budget ? `with a budget of $${budget}` : '';
    const traitsText = Array.isArray(personalityTraits) ? personalityTraits.join(', ') : personalityTraits;
    
    const prompt = `Suggest 5 practical, thoughtful, realistic gift ideas for a ${relationshipType} who is ${traitsText} ${budgetText}.

Requirements:
- Prioritize genuinely useful items people can actually use
- Avoid joke/novelty/awkward gag gifts; keep tone professional and helpful
- Include brief reason why it suits the recipient
- Keep each line under 110 characters
- Format strictly as: "🎁 [Gift Name] - [Short reason]"
- Return only the 5 suggestions, one per line, no extra text`;

    // Use appropriate model based on API
    // Prefer a current, lightweight OpenAI model by default
    const model = isDeepSeek ? "deepseek-chat" : "gpt-4o-mini";

    const completion = await openai.chat.completions.create({
      model: model,
      messages: [
        {
          role: "system",
          content: "You are a helpful gift concierge. Recommend practical, thoughtful, realistic gifts, with concise reasons. Avoid humor and novelty unless specifically asked."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      max_tokens: 500,
      temperature: 0.6,
    });

    const suggestions = completion.choices[0].message.content
      .split('\n')
      .filter(line => line.trim() && line.includes('🎁'))
      .map(suggestion => suggestion.trim());

    // If parsing fails, fallback locally
    if (!suggestions || suggestions.length === 0) {
      console.warn('⚠️ OpenAI returned no parsable suggestions; using local fallback');
      return generateLocalSuggestions(relationshipType, personalityTraits, budget);
    }

    return suggestions;
  } catch (error) {
    // If auth error, use local fallback to avoid 500s in dev
    const status = error?.status || error?.code;
    const isAuthError = status === 401 || error?.code === 'invalid_api_key';
    if (isAuthError) {
      console.warn('⚠️ OpenAI auth error; using local fallback suggestions');
      return generateLocalSuggestions(relationshipType, personalityTraits, budget);
    }

    console.error('API Error:', error);
    throw new Error('Failed to generate gift suggestions');
  }
};

module.exports = { generateGiftSuggestions }; 