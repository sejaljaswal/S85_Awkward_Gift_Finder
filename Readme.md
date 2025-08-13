
# 🎁 AwkwardGift Finder

A fun and quirky full-stack web application that helps users find hilariously awkward and personalized gift suggestions using OpenAI's API. Perfect for those moments when you want to give something memorable and slightly embarrassing!

# Project Title:. AwkwardGiftFinder

### Project Overview:
AwkwardGiftFinder is a fun shopping app that helps users find hilariously awkward gifts tailored to the recipient's personality. It adds humor and uniqueness to gift-giving with personalized suggestions based on a quirky personality quiz.

### Key Features:


- **AI-Powered Gift Suggestions**: Uses OpenAI's GPT-3.5-turbo to generate creative gift ideas
- **Personalized Input**: Choose relationship type, personality traits, and optional budget
- **Fun & Engaging UI**: Beautiful design with emojis and witty interactions
- **Favorites System**: Save your favorite suggestions
- **Share Results**: Share gift suggestions with friends
- **Regenerate Options**: Get new suggestions with the same criteria
- **Responsive Design**: Works perfectly on desktop and mobile

## 🛠️ Tech Stack

### Frontend
- **React.js** - Modern UI framework
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API calls
- **Vite** - Fast build tool

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **OpenAI API** - AI-powered gift suggestions
- **MongoDB** - Database (optional, for storing queries)
- **CORS** - Cross-origin resource sharing

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- OpenAI API key

### 1. Clone the Repository
```bash
git clone <repository-url>
cd akwgift
```

### 2. Backend Setup

```bash
cd server
npm install
```

Create a `.env` file in the `server/config/` directory:
```env
# MongoDB Connection (optional)
DB_URL=mongodb://localhost:27017/awkwardgiftfinder

# OpenAI API Key (required)
OPENAI_API_KEY=your_openai_api_key_here

# Server Port
PORT=5001
```

Start the backend server:
```bash
npm start
```

### 3. Frontend Setup

```bash
cd frontend
npm install
```

Start the development server:
```bash
npm run dev
```

### 4. Get Your OpenAI API Key

1. Visit [OpenAI Platform](https://platform.openai.com/)
2. Sign up or log in
3. Navigate to API Keys section
4. Create a new API key
5. Add it to your `.env` file

## 📱 Usage

1. **Select Relationship Type**: Choose from options like Friend, Boss, Sibling, etc.
2. **Pick Personality Traits**: Select 2-4 traits that describe the person
3. **Set Budget** (Optional): Add a budget constraint
4. **Generate Suggestions**: Click "Find Awkward Gifts!" to get AI-generated suggestions
5. **Save Favorites**: Click the heart icon to save your favorite suggestions
6. **Share Results**: Share the suggestions with friends
7. **Regenerate**: Get new suggestions with the same criteria

## 🎯 API Endpoints

### POST `/api/suggestions`
Generate gift suggestions using OpenAI.

**Request Body:**
```json
{
  "relationshipType": "Friend",
  "personalityTraits": ["Funny", "Tech-savvy"],
  "budget": "50"
}
```

**Response:**
```json
{
  "success": true,
  "suggestions": [
    "🎁 USB Coffee Warmer - Because cold coffee is a crime against humanity",
    "🎁 Bluetooth Shower Speaker - For those who can't shower without music"
  ],
  "query": {
    "relationshipType": "Friend",
    "personalityTraits": ["Funny", "Tech-savvy"],
    "budget": "50"
  }
}
```

## 🎨 Customization

### Adding New Personality Traits
Edit `frontend/src/components/GiftForm.jsx` and add new options to the `personalityOptions` array.

### Modifying the AI Prompt
Edit `server/openai/openaiClient.js` to customize the prompt sent to OpenAI.

### Styling Changes
The app uses Tailwind CSS. Modify the classes in the components to change the appearance.

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
cd frontend
npm run build
```

### Backend (Render/Railway)
1. Set environment variables in your hosting platform
2. Deploy the `server` directory
3. Update the API_BASE_URL in `frontend/src/pages/Home.jsx`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- OpenAI for providing the AI capabilities
- The React and Tailwind CSS communities
- All the awkward gift enthusiasts out there!

## 🐛 Troubleshooting

### Common Issues

1. **OpenAI API Error**: Make sure your API key is correct and has sufficient credits
2. **CORS Error**: Ensure the backend is running on the correct port
3. **MongoDB Connection**: The app works without MongoDB, but if you want to use it, make sure it's running

### Getting Help

If you encounter any issues, please:
1. Check the console for error messages
2. Verify your environment variables
3. Ensure all dependencies are installed
4. Create an issue in the repository

---

Made with ❤️ and a dash of awkwardness! 🎭
=======


