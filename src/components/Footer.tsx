import { Shield, Linkedin, Facebook, Instagram } from 'lucide-react';
import LogoImg from '../assets/mainLogo.jpeg';

interface FooterProps {
  navigateTo: (page: string) => void;
}

export default function Footer({ navigateTo }: FooterProps) {
  const handleEmailClick = () => {
    window.location.href = 'mailto:contact@shieldedhaven.com';
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    alert(`${type} copied to clipboard!`);
  };

  return (
    <footer
      className="bg-gray-900 text-white py-12"
      style={{ fontFamily: 'Poppins, sans-serif' }} // ✅ applied here
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src={LogoImg}
                alt="ShieldED Haven Logo"
                className="w-15 h-15 object-contain"
              />
              <span className="text-2xl font-bold">
                ShieldED Haven
              </span>
            </div>

            <p className="text-gray-400">
              Protecting K-12 students from cyberbullying with Artificial Intelligence-powered solutions.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Services', 'Team', 'Career', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => navigateTo(item.toLowerCase())}
                  className="block text-gray-400 hover:text-cyan-500 hover:bg-gray-800 px-2 py-1 rounded transition-all"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Connect With Us</h4>
            <div className="flex gap-4 mb-4">
              <a
                href="https://www.linkedin.com/company/shieldedhaven"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-500 hover:bg-gray-800 p-2 rounded transition-all"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://x.com/ShieldedHaven?s=20"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-500 hover:bg-gray-800 p-2 rounded transition-all"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/p/Shielded-Haven-61574015247372/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-500 hover:bg-gray-800 p-2 rounded transition-all"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/shielded.haven/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-500 hover:bg-gray-800 p-2 rounded transition-all"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
            <div className="space-y-2">
              <button
                onClick={handleEmailClick}
                className="text-gray-400 text-sm hover:text-cyan-500 hover:underline transition-all block"
              >
                contact@shieldedhaven.com
              </button>
              <button
                onClick={() => copyToClipboard('contact@shieldedhaven.com', 'Email')}
                className="text-xs text-gray-500 hover:text-cyan-400 transition-all"
              >
                (Click to copy email)
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          © 2025 ShieldED Haven. All rights reserved. | Veteran-Owned Business | HUB Certified
        </div>
      </div>
    </footer>
  );
}
