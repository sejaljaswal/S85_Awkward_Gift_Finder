import { useState } from 'react';

const GiftForm = ({ onSubmit, isLoading }) => {
  const [formData, setFormData] = useState({
    relationshipType: '',
    personalityTraits: [],
    budget: ''
  });

  const relationshipOptions = [
    'Friend', 'Family Member', 'Coworker', 'Boss', 'Sibling', 
    'Parent', 'Child', 'Partner', 'Neighbor', 'Acquaintance'
  ];

  const personalityOptions = [
    'Funny', 'Serious', 'Adventurous', 'Creative', 'Tech-savvy',
    'Foodie', 'Fitness Enthusiast', 'Bookworm', 'Gamer', 'Fashionista',
    'Minimalist', 'Collector', 'Outdoorsy', 'Homebody', 'Social Butterfly',
    'Introvert', 'Extrovert', 'Sarcastic', 'Optimistic', 'Pessimistic'
  ];

  const handleRelationshipChange = (e) => {
    setFormData(prev => ({ ...prev, relationshipType: e.target.value }));
  };

  const handlePersonalityChange = (trait) => {
    setFormData(prev => ({
      ...prev,
      personalityTraits: prev.personalityTraits.includes(trait)
        ? prev.personalityTraits.filter(t => t !== trait)
        : [...prev.personalityTraits, trait]
    }));
  };

  const handleBudgetChange = (e) => {
    setFormData(prev => ({ ...prev, budget: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.relationshipType && formData.personalityTraits.length > 0) {
      onSubmit(formData);
    }
  };

  return (
    <div className="w-full max-w-2xl">
      <div className="glass rounded-3xl p-8 shadow-2xl border border-white/20">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">🎁</div>
          <h2 className="text-3xl font-bold text-white mb-3">
            Find the Perfect Awkward Gift
          </h2>
          <p className="text-white/70 text-lg">
            Let AI help you discover hilariously perfect presents!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Relationship Type */}
          <div>
            <label className="block text-white font-semibold mb-3 text-lg">
              Who are you shopping for? *
            </label>
            <select
              value={formData.relationshipType}
              onChange={handleRelationshipChange}
              required
              className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/30 transition-all duration-300"
            >
              <option value="" className="text-gray-800">Select relationship type...</option>
              {relationshipOptions.map(option => (
                <option key={option} value={option} className="text-gray-800">{option}</option>
              ))}
            </select>
          </div>

          {/* Personality Traits */}
          <div>
            <label className="block text-white font-semibold mb-3 text-lg">
              What's their personality like? * (Select 2-4)
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {personalityOptions.map(trait => (
                <label key={trait} className="flex items-center space-x-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={formData.personalityTraits.includes(trait)}
                    onChange={() => handlePersonalityChange(trait)}
                    className="w-5 h-5 rounded-lg text-purple-600 focus:ring-purple-500 bg-white/10 border-white/20"
                  />
                  <span className="text-white/80 group-hover:text-white transition-colors duration-200 text-sm font-medium">
                    {trait}
                  </span>
                </label>
              ))}
            </div>
            {formData.personalityTraits.length > 0 && (
              <div className="mt-4 p-3 bg-white/10 rounded-xl border border-white/20">
                <p className="text-white/80 text-sm">
                  <span className="font-semibold">Selected:</span> {formData.personalityTraits.join(', ')}
                </p>
              </div>
            )}
          </div>

          {/* Budget */}
          <div>
            <label className="block text-white font-semibold mb-3 text-lg">
              Budget (Optional)
            </label>
            <div className="relative">
              <span className="absolute left-4 top-3 text-white/60 text-lg">$</span>
              <input
                type="number"
                value={formData.budget}
                onChange={handleBudgetChange}
                placeholder="50"
                min="1"
                className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/30 transition-all duration-300"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!formData.relationshipType || formData.personalityTraits.length === 0 || isLoading}
            className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Finding Awkward Gifts...
              </span>
            ) : (
              <span className="flex items-center justify-center">
                🎁 Find Awkward Gifts!
              </span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GiftForm; 