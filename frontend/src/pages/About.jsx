import { Link } from 'react-router-dom';

const About = () => {
  const teamMembers = [
    {
      name: 'AI Gift Expert',
      role: 'Chief Awkwardness Officer',
      avatar: '🤖',
      bio: 'Specializes in finding the most hilariously perfect gifts using advanced AI algorithms.'
    },
    {
      name: 'Creative Director',
      role: 'Master of Memorable Moments',
      avatar: '🎨',
      bio: 'Ensures every gift suggestion is both awkward and absolutely unforgettable.'
    },
    {
      name: 'User Experience',
      role: 'Happiness Engineer',
      avatar: '😊',
      bio: 'Makes sure your gift-finding journey is smooth, fun, and delightfully awkward.'
    }
  ];

  const features = [
    {
      icon: '🎯',
      title: 'Personalized Suggestions',
      description: 'Our AI analyzes personality traits and relationship dynamics to suggest gifts that are perfectly awkward for the recipient.'
    },
    {
      icon: '🤖',
      title: 'Advanced AI Technology',
      description: 'Powered by cutting-edge AI that understands humor, social dynamics, and what makes gifts memorable.'
    },
    {
      icon: '⚡',
      title: 'Instant Results',
      description: 'Get creative gift suggestions in seconds, no more hours spent browsing generic gift guides.'
    },
    {
      icon: '💡',
      title: 'Creative & Unique',
      description: 'Discover gifts that are genuinely unique and will create lasting memories and conversations.'
    },
    {
      icon: '🎁',
      title: 'Budget Friendly',
      description: 'Find amazing gifts at any price point, from affordable to premium options.'
    },
    {
      icon: '🔄',
      title: 'Regenerate Options',
      description: 'Not satisfied? Generate new suggestions until you find the perfect awkward gift.'
    }
  ];

  const howItWorks = [
    {
      step: 1,
      title: 'Tell Us About Them',
      description: 'Select the relationship type and personality traits of the person you\'re shopping for.'
    },
    {
      step: 2,
      title: 'Set Your Budget',
      description: 'Optionally set a budget to get suggestions that fit your price range.'
    },
    {
      step: 3,
      title: 'Get AI Suggestions',
      description: 'Our AI generates 5 hilariously perfect gift suggestions tailored to your specifications.'
    },
    {
      step: 4,
      title: 'Choose & Share',
      description: 'Pick your favorites, regenerate if needed, and share the results with friends.'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About AwkwardGift Finder
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            We believe that the best gifts are the ones that make people laugh, 
            create lasting memories, and become stories that are told for years to come.
          </p>
          <div className="glass rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-white/90 text-lg">
              Our mission is to revolutionize gift-giving by making it fun, 
              memorable, and delightfully awkward! 🎁✨
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-white/70 text-xl">Simple steps to find the perfect awkward gift</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((step) => (
              <div key={step.step} className="glass rounded-2xl p-6 border border-white/20 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-white font-semibold text-lg mb-3">{step.title}</h3>
                <p className="text-white/70">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Us</h2>
            <p className="text-white/70 text-xl">Discover what makes our gift suggestions special</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="glass rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-3">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-white/70 text-xl">The minds behind the awkwardness</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="glass rounded-2xl p-6 border border-white/20 text-center">
                <div className="text-6xl mb-4">{member.avatar}</div>
                <h3 className="text-white font-semibold text-xl mb-2">{member.name}</h3>
                <p className="text-purple-300 font-medium mb-4">{member.role}</p>
                <p className="text-white/70">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="glass rounded-3xl p-12 border border-white/20">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Find the Perfect Awkward Gift?
            </h2>
            <p className="text-white/80 text-xl mb-8">
              Join thousands of people who have discovered the joy of giving 
              hilariously perfect gifts that create lasting memories.
            </p>
            <Link
              to="/"
              className="btn-primary text-lg px-8 py-4 inline-block"
            >
              🎁 Start Finding Gifts Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 