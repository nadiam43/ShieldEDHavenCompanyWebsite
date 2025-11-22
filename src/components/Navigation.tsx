// Navigation bar component (top menu)

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import LogoImg from '../assets/mainLogo.jpeg';

interface NavigationProps {
  currentPage: string;
  navigateTo: (page: string) => void;
}

export default function Navigation({ currentPage, navigateTo }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // controls mobile dropdown
  const [scrolled, setScrolled] = useState(false); // tracks if user scrolled down

  useEffect(() => {
    // checks if the page is scrolled down more than 50px
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll); // cleanup
  }, []);

  // handles switching pages and closes mobile menu
  const handleNavigate = (page: string) => {
    navigateTo(page);
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm shadow-md'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">

          {/* Left side: Logo and brand name */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            <button
              onClick={() => navigateTo('home')}
              className="flex items-center space-x-2"
            >
              <img
                src={LogoImg}
                alt="ShieldED Haven Logo"
                className="w-20 h-20 object-contain"
              />

              <span
                className="text-3xl font-semibold text-[#001f54]"
                style={{ fontFamily: 'Playfair Display, serif' }} // custom font
              >
                ShieldED Haven
              </span>
            </button>
          </div>

          {/* Right: Desktop navigation menu (only shows on medium+ screens) */}
          <div
            className="hidden md:flex flex-nowrap items-center flex-grow justify-end 
                     ml-2 lg:ml-20 overflow-hidden"
          >
            {['Home', 'About', 'Services', 'Team', 'Career', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => handleNavigate(item.toLowerCase())}
                className={`transition-all rounded whitespace-nowrap ${
                  currentPage === item.toLowerCase()
                    ? 'text-cyan-600 border-b-2 border-cyan-600 font-medium' // active page styling
                    : 'text-gray-700 hover:text-cyan-600 font-normal' // normal link
                }`}
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: 'clamp(0.7rem, 1.2vw, 1.1rem)', // scales with screen
                  padding: 'clamp(0.25rem, 0.5vw, 0.5rem) clamp(0.3rem, 0.8vw, 1rem)',
                  marginLeft: 'clamp(0.2rem, 0.8vw, 1rem)',
                  marginRight: 'clamp(0.2rem, 0.8vw, 1rem)',
                }}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile menu toggle button (only visible on small screens) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" /> // close icon
            ) : (
              <Menu className="w-6 h-6 text-gray-900" /> // hamburger icon
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu (only shows when menu is open) */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {['Home', 'About', 'Services', 'Team', 'Career', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => handleNavigate(item.toLowerCase())}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-cyan-600 rounded-lg transition-colors"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
