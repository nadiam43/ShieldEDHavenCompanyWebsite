// import React from 'react';
import { Shield, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

interface FooterProps {
  navigateTo: (page: string) => void;
}

export default function Footer({ navigateTo }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="w-8 h-8 text-cyan-500" />
              <span className="text-2xl font-bold">ShieldED Haven</span>
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
                  className="block text-gray-400 hover:text-cyan-500 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Connect With Us</h4>
            <div className="flex gap-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-cyan-500 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-500 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-500 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-500 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">contact@shieldedhaven.com</p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          © 2025 ShieldED Haven. All rights reserved. | Veteran-Owned Business | HUB Certified
        </div>
      </div>
    </footer>
  );
}