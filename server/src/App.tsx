import React, { useState } from 'react';
import { 
  Gift, 
  Brain, 
  Target, 
  ArrowRight, 
  Star, 
  ChevronLeft, 
  ChevronRight,
  Zap,
  Users,
  Lightbulb,
  Heart,
  MessageCircle,
  Instagram,
  Github,
  Mail
} from 'lucide-react';

function App() {
  const [selectedRelationship, setSelectedRelationship] = useState('');
  const [selectedTraits, setSelectedTraits] = useState<string[]>([]);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentGiftExample, setCurrentGiftExample] = useState(0);

  const relationships = [
    'Best Friend', 'Coworker', 'Family Member', 'Romantic Partner', 
    'Neighbor', 'Boss', 'Acquaintance', 'Ex (awkward!)'
  ];

  const traits = [
    'Sarcastic', 'Introverted', 'Drama Queen', 'Tech Obsessed', 
    'Coffee Addict', 'Cat Person', 'Conspiracy Theorist', 'Gym Rat',
    'Always Late', 'Overthinker', 'Plant Killer', 'Netflix Binger'
  ];

  const giftExamples = [
    {
      name: "Existential Crisis in a Jar",
      description: "Pre-packaged thoughts about life's meaninglessness. Perfect for your overthinking friend!",
      price: "$24.99",
      theme: "Philosophy"
    },
    {
      name: "Social Battery Charger",
      description: "A fake phone charger for when your introverted friend needs to 'charge their social battery'",
      price: "$19.99",
      theme: "Introvert"
    },
    {
      name: "Procrastination Station",
      description: "A beautifully crafted to-don't list for the friend who perfected the art of doing nothing",
      price: "$15.99",
      theme: "Productivity"
    },
    {
      name: "Awkward Silence Generator",
      description: "A button that creates 30 seconds of pure awkwardness. Great for uncomfortable family dinners!",
      price: "$29.99",
      theme: "Social"
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      text: "I got my coworker a 'Professional Awkwardness Kit' and now we're best friends! 😂",
      rating: 5
    },
    {
      name: "Mike T.",
      text: "Found the perfect gift for my conspiracy theorist uncle. The AI really gets it!",
      rating: 5
    },
    {
      name: "Emma L.",
      text: "My boyfriend loved his 'Emotional Unavailability Starter Pack'. We're still together... somehow.",
      rating: 5
    }
  ];

  const toggleTrait = (trait: string) => {
    setSelectedTraits(prev => 
      prev.includes(trait) 
        ? prev.filter(t => t !== trait)
        : [...prev, trait]
    );
  };

  const handleGenerate = () => {
    if (selectedRelationship && selectedTraits.length > 0) {
      alert(`Generating awkward gifts for your ${selectedRelationship.toLowerCase()} with traits: ${selectedTraits.join(', ')}! 🎁`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Gift className="h-8 w-8 text-purple-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                AwkwardGift 🤪
              </span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Home</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">About</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">How it Works</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Gift Ideas</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Contact</a>
            </nav>

            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                    Finding the perfect weird gift,
                  </span>
                  <br />
                  <span className="text-gray-800">made hilariously easy!</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-lg">
                  Let AI generate fun, awkward gifts for your weirdest friends. Because normal gifts are boring! 🎁
                </p>
              </div>

              {/* Gift Generator Form */}
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Generate Your Perfect Awkward Gift</h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Relationship Type</label>
                    <select 
                      value={selectedRelationship}
                      onChange={(e) => setSelectedRelationship(e.target.value)}
                      className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="">Select relationship...</option>
                      {relationships.map(rel => (
                        <option key={rel} value={rel}>{rel}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Personality Traits</label>
                    <div className="flex flex-wrap gap-2">
                      {traits.map(trait => (
                        <button
                          key={trait}
                          onClick={() => toggleTrait(trait)}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                            selectedTraits.includes(trait)
                              ? 'bg-purple-600 text-white shadow-md transform scale-105'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {trait}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button 
                    onClick={handleGenerate}
                    disabled={!selectedRelationship || selectedTraits.length === 0}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-lg font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    <Zap className="h-5 w-5" />
                    <span>Generate Awkward Gift</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl blur-3xl opacity-20"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                <div className="text-center space-y-6">
                  <div className="text-6xl">🎁</div>
                  <h3 className="text-2xl font-bold text-gray-800">Perfect Awkward Exchange</h3>
                  <div className="space-y-4 text-left">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-600">AI analyzes personality traits</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                      <span className="text-gray-600">Generates weird but thoughtful gifts</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span className="text-gray-600">Creates unforgettable moments</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose AwkwardGift?</h2>
            <p className="text-xl text-gray-600">Because ordinary gifts are for ordinary people</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 group">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">🤖 AI-Powered Suggestions</h3>
                <p className="text-gray-600">Our quirky AI understands the art of awkward gifting and generates hilariously perfect suggestions</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 group">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">🎯 Personalized to Relationship & Traits</h3>
                <p className="text-gray-600">Tailored suggestions based on your relationship dynamic and their unique personality quirks</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 group">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Gift className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">🎁 1000+ Gift Ideas with Themes</h3>
                <p className="text-gray-600">From existential crisis kits to social anxiety survival packs - we've got every awkward scenario covered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Four steps to awkward gift perfection</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "Select", desc: "Choose your relationship type", step: "01" },
              { icon: Lightbulb, title: "Generate", desc: "Let AI work its awkward magic", step: "02" },
              { icon: Heart, title: "Laugh", desc: "Enjoy the hilariously perfect suggestions", step: "03" },
              { icon: MessageCircle, title: "Share", desc: "Share the awkward joy with friends", step: "04" }
            ].map((item, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="relative">
                  <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto">
                    <item.icon className="h-10 w-10 text-purple-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gift Examples Carousel */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Awkward Gifts</h2>
            <p className="text-xl text-gray-600">Real gifts that real people actually loved (or at least laughed at)</p>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-500 ease-in-out" style={{transform: `translateX(-${currentGiftExample * 100}%)`}}>
                {giftExamples.map((gift, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="bg-white rounded-2xl p-8 shadow-xl mx-4">
                      <div className="text-center space-y-4">
                        <div className="text-6xl">🎁</div>
                        <h3 className="text-2xl font-bold text-gray-800">{gift.name}</h3>
                        <p className="text-gray-600">{gift.description}</p>
                        <div className="flex justify-center items-center space-x-4">
                          <span className="text-2xl font-bold text-purple-600">{gift.price}</span>
                          <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">{gift.theme}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={() => setCurrentGiftExample(prev => prev > 0 ? prev - 1 : giftExamples.length - 1)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>

            <button 
              onClick={() => setCurrentGiftExample(prev => prev < giftExamples.length - 1 ? prev + 1 : 0)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {giftExamples.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentGiftExample(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentGiftExample ? 'bg-purple-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Happy Awkward Customers</h2>
            <p className="text-xl text-gray-600">See what our users are saying (when they're not laughing)</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="text-center space-y-6">
              <div className="flex justify-center space-x-1">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-2xl text-gray-800 font-medium">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              <p className="text-lg text-purple-600 font-semibold">
                — {testimonials[currentTestimonial].name}
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-purple-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Gift className="h-8 w-8 text-purple-400" />
                <span className="text-2xl font-bold">AwkwardGift 🤪</span>
              </div>
              <p className="text-gray-400">Making gift-giving awkwardly awesome since 2024</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">About Us</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">How It Works</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Gift Categories</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">FAQ</a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Stay Awkward</h3>
              <p className="text-gray-400 mb-4">Subscribe for weekly awkward gift inspiration</p>
              <div className="flex space-x-2 mb-4">
                <input 
                  type="email" 
                  placeholder="your@email.com" 
                  className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <button className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  <Mail className="h-5 w-5" />
                </button>
              </div>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AwkwardGift. All rights reserved. May your gifts be weird and wonderful! 🎁</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App; 