import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'WTF DO THEY WANT' },
    { path: '/explore', label: 'EXPLORE GIFTS', dropdown: true },
    { path: '/about', label: 'ABOUT' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-pink-100 ${scrolled ? 'shadow-sm' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Site Name */}
          <Link to="/" className="flex items-center space-x-2 group">
            <span className="text-3xl">🎁</span>
            <span className="font-bold text-lg tracking-wider text-pink-600 hidden sm:inline">WTF DO THEY WANT</span>
          </Link>

          {/* Center Nav Links */}
          <div className="hidden md:flex items-center space-x-6 mx-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`uppercase font-semibold tracking-wide px-2 py-1 rounded transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-pink-600'
                    : 'text-pink-700 hover:text-pink-600'
                }`}
              >
                {item.label}
                {item.dropdown && <span className="ml-1">▼</span>}
              </Link>
            ))}
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            {/* Giftlists Dropdown */}
            <div className="relative group hidden md:block">
              <button className="uppercase font-semibold tracking-wide text-pink-700 hover:text-pink-600 flex items-center">
                YOUR GIFTLISTS <span className="ml-1">▼</span>
              </button>
              {/* Dropdown menu placeholder */}
              {/* <div className="absolute right-0 mt-2 w-40 bg-white rounded shadow-lg py-2 hidden group-hover:block z-50">
                <Link to="/giftlists" className="block px-4 py-2 text-pink-700 hover:bg-pink-50">My Giftlists</Link>
              </div> */}
            </div>
            {/* Login/Signup */}
            <Link
              to="/login"
              className="border border-pink-600 text-pink-700 hover:text-white hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 font-semibold px-4 py-1 rounded transition-colors duration-200"
            >
              LOG IN | SIGN UP
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-pink-700 hover:bg-pink-100 transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white/95 rounded-b-xl shadow-lg py-4 px-2 mt-1">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`uppercase font-semibold tracking-wide px-2 py-2 rounded transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-pink-600'
                      : 'text-pink-700 hover:text-pink-600'
                  }`}
                >
                  {item.label}
                  {item.dropdown && <span className="ml-1">▼</span>}
                </Link>
              ))}
              <Link
                to="/giftlists"
                className="uppercase font-semibold tracking-wide px-2 py-2 rounded text-pink-700 hover:text-pink-600"
                onClick={() => setIsOpen(false)}
              >
                YOUR GIFTLISTS
              </Link>
              <Link
                to="/login"
                className="border border-pink-600 text-pink-700 hover:text-white hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 font-semibold px-4 py-2 rounded transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                LOG IN | SIGN UP
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 