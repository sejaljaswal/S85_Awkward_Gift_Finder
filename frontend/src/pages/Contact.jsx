import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const faqs = [
    {
      question: 'How does the AI generate gift suggestions?',
      answer: 'Our AI analyzes the relationship type and personality traits you provide to create personalized gift suggestions that are both thoughtful and delightfully awkward.'
    },
    {
      question: 'Are the gift suggestions actually good?',
      answer: 'Absolutely! While they may be awkward, they\'re designed to be memorable and create lasting positive memories. The best gifts are often the ones that make people laugh and tell stories about.'
    },
    {
      question: 'Can I use this for any occasion?',
      answer: 'Yes! Our gift finder works for birthdays, holidays, anniversaries, or any special occasion where you want to give something memorable.'
    },
    {
      question: 'Is my information secure?',
      answer: 'We take privacy seriously. Your personal information is never stored or shared, and we only use it to generate gift suggestions.'
    },
    {
      question: 'Can I suggest new features?',
      answer: 'Of course! We love hearing from our users. Feel free to contact us with any ideas or suggestions for improving the gift-finding experience.'
    },
    {
      question: 'Is this service free?',
      answer: 'Yes! AwkwardGift Finder is completely free to use. We believe everyone deserves to give amazing gifts without breaking the bank.'
    }
  ];

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'hello@awkwardgiftfinder.com',
      link: 'mailto:hello@awkwardgiftfinder.com'
    },
    {
      icon: '🐦',
      title: 'Twitter',
      value: '@AwkwardGiftFinder',
      link: 'https://twitter.com/AwkwardGiftFinder'
    },
    {
      icon: '📘',
      title: 'Facebook',
      value: 'AwkwardGift Finder',
      link: 'https://facebook.com/AwkwardGiftFinder'
    },
    {
      icon: '📷',
      title: 'Instagram',
      value: '@awkwardgiftfinder',
      link: 'https://instagram.com/awkwardgiftfinder'
    }
  ];

  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Have questions, suggestions, or just want to share your awkward gift stories? 
            We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
              
              {submitStatus === 'success' && (
                <div className="glass rounded-2xl p-6 border border-green-300/30 mb-6">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">✅</span>
                    <div>
                      <h3 className="text-white font-semibold">Message Sent!</h3>
                      <p className="text-white/70">Thank you for reaching out. We'll get back to you soon!</p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white font-semibold mb-3">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/30 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-3">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/30 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-3">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/30 transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-3">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/30 transition-all duration-300 resize-none"
                    placeholder="Tell us what's on your mind..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Message...
                    </span>
                  ) : (
                    '📤 Send Message'
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Connect With Us</h2>
              
              <div className="space-y-4 mb-8">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="glass rounded-2xl p-4 border border-white/20 hover:border-white/40 transition-all duration-300 flex items-center space-x-4 group"
                  >
                    <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </span>
                    <div>
                      <h3 className="text-white font-semibold">{info.title}</h3>
                      <p className="text-white/70">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="glass rounded-2xl p-6 border border-white/20">
                <h3 className="text-white font-semibold text-lg mb-4">Office Hours</h3>
                <div className="space-y-2 text-white/70">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed (We're finding awkward gifts!)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-white/70 text-xl">Everything you need to know about AwkwardGift Finder</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="glass rounded-2xl p-6 border border-white/20">
                <h3 className="text-white font-semibold text-lg mb-3">{faq.question}</h3>
                <p className="text-white/70">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 