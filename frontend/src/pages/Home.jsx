import React, { useState } from 'react';

export default function Homepage() {
  const traits = [
    'Sarcastic', 'Introverted', 'Drama Queen', 'Tech Obsessed',
    'Coffee Addict', 'Cat Person', 'Conspiracy Theorist', 'Gym Rat',
    'Always Late', 'Overthinker', 'Plant Killer', 'Netflix Binger'
  ];

  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-white p-4 sm:p-6 font-sans">
      {/* Navbar */}
      <nav className="mx-auto max-w-6xl flex justify-between items-center mb-10 py-2 sm:py-4 px-2 sm:px-4 bg-white/90 rounded-2xl shadow relative">
        <div className="text-xl font-bold flex items-center gap-2">
          <span>🎁</span>
          <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">AwkwardGift</span>
        </div>
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 text-gray-700 font-medium">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">How it Works</a>
          <a href="#">Gift Ideas</a>
          <a href="#">Contact</a>
        </div>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl px-2"
          onClick={() => setNavOpen(!navOpen)}
          aria-label="Open navigation"
        >
          ☰
        </button>
        {/* CTA */}
        <button className="hidden sm:block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-5 py-2 rounded-full font-medium shadow-md hover:scale-105 transition-all duration-300">
          Get Started
        </button>
        {/* Mobile Nav Dropdown */}
        {navOpen && (
          <div className="absolute top-full left-0 w-full bg-white rounded-b-2xl shadow-md flex flex-col items-center gap-4 py-4 z-10 md:hidden">
            <a href="#" className="text-gray-700 font-medium">Home</a>
            <a href="#" className="text-gray-700 font-medium">About</a>
            <a href="#" className="text-gray-700 font-medium">How it Works</a>
            <a href="#" className="text-gray-700 font-medium">Gift Ideas</a>
            <a href="#" className="text-gray-700 font-medium">Contact</a>
            <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-5 py-2 rounded-full font-medium shadow-md mt-2">
              Get Started
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left Text & Generator */}
        <div className="space-y-8 w-full">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight text-center md:text-left">
            <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">Finding the perfect</span>{' '}
            <span className="text-orange-500">weird gift,</span><br />
            <span className="text-gray-900">made hilariously easy!</span>
          </h1>
          <p className="text-lg text-gray-700 text-center md:text-left">
            Let AI generate fun, awkward gifts for your weirdest friends. Because normal gifts are boring! 🎁
          </p>

          {/* Gift Generator Form */}
          <div className="bg-white rounded-2xl shadow p-6 space-y-4 w-full max-w-lg mx-auto">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 text-center">Generate Your Perfect Awkward Gift</h2>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Relationship Type</label>
              <select className="w-full border rounded-md p-2">
                <option>Select relationship...</option>
                <option>Friend</option>
                <option>Family</option>
                <option>Colleague</option>
                <option>Partner</option>
                <option>Neighbor</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Personality Traits</label>
              <div className="flex flex-wrap gap-2">
                {traits.map((trait) => (
                  <span
                    key={trait}
                    className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium text-gray-700 hover:bg-pink-100 transition cursor-pointer"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>
            <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white py-3 rounded-full font-semibold flex items-center justify-center gap-2 shadow hover:scale-105 transition-all duration-300">
              ⚡ Generate Awkward Gift <span className="ml-1">→</span>
            </button>
          </div>
        </div>

        {/* Right Card */}
        <div className="bg-white rounded-2xl shadow p-8 space-y-6 w-full max-w-md mx-auto mt-8 md:mt-0 flex flex-col items-center">
          <div className="text-5xl text-center">🎁</div>
          <h3 className="text-xl font-semibold text-center">Perfect Awkward Exchange</h3>
          <ul className="space-y-3 text-gray-700 w-full">
            <li className="flex items-center gap-2"><span className="text-purple-500 text-2xl">🟣</span> AI analyzes personality traits</li>
            <li className="flex items-center gap-2"><span className="text-pink-500 text-2xl">🔴</span> Generates weird but thoughtful gifts</li>
            <li className="flex items-center gap-2"><span className="text-orange-400 text-2xl">🟠</span> Creates unforgettable moments</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
