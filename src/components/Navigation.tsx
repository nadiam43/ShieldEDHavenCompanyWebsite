import { useState, useEffect } from 'react';
import { Menu, X, Shield } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  navigateTo: (page: string) => void;
}

export default function Navigation({ currentPage, navigateTo }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (page: string) => {
    navigateTo(page);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm shadow-md'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button onClick={() => navigateTo('home')} className="flex items-center space-x-2 group">
            <Shield className="w-8 h-8 text-cyan-500 group-hover:scale-110 transition-transform" />
            <span className="text-2xl font-bold text-gray-900">ShieldED Haven</span>
          </button>

          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Services', 'Team', 'Career', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => handleNavigate(item.toLowerCase())}
                className={`font-medium transition-all ${
                  currentPage === item.toLowerCase()
                    ? 'text-cyan-600 border-b-2 border-cyan-600'
                    : 'text-gray-700 hover:text-cyan-500'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            {isMenuOpen ? <X className="w-6 h-6 text-gray-900" /> : <Menu className="w-6 h-6 text-gray-900" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {['Home', 'About', 'Services', 'Team', 'Career', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => handleNavigate(item.toLowerCase())}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 rounded-lg transition-colors"
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