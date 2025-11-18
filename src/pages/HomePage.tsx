// import React from 'react';
import { Shield } from 'lucide-react';
import CTABanner from '../components/CTABanner';

interface HomePageProps {
  navigateTo: (page: string) => void;
}

export default function HomePage({ navigateTo }: HomePageProps) {
  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-cyan-400 via-cyan-500 to-blue-600 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight animate-fade-in">
                Hello, Welcome to
                <span className="block mt-2">ShieldED Haven</span>
              </h1>
              <p className="text-xl text-cyan-50">Protecting students with Artificial Intelligence-powered cyberbullying prevention</p>
              <button
                onClick={() => navigateTo('about')}
                className="bg-white text-cyan-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-cyan-50 transition-all transform hover:scale-105 shadow-lg"
              >
                LEARN MORE
              </button>

              <div className="flex gap-6 mt-8">
                <div className="bg-white p-6 rounded-lg shadow-xl w-36 h-36 flex items-center justify-center transform hover:scale-105 transition-all">
                  <div className="text-center">
                    <div className="text-sm font-bold text-blue-900">HUB</div>
                    <div className="text-xs text-blue-700 mt-1">Certified</div>
                    <Shield className="w-8 h-8 text-blue-600 mx-auto mt-2" />
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-xl w-36 h-36 flex items-center justify-center transform hover:scale-105 transition-all">
                  <div className="text-center">
                    <div className="text-sm font-bold text-red-800">VETERAN</div>
                    <div className="text-sm font-bold text-red-800">OWNED</div>
                    <Shield className="w-8 h-8 text-red-700 mx-auto mt-2" />
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
                <div className="bg-white rounded-3xl p-8 shadow-2xl">
                  <Shield className="w-32 h-32 mx-auto text-cyan-500" />
                  <div className="text-center mt-4 text-3xl font-bold text-blue-600">ED</div>
                </div>
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-400 rounded-full opacity-50 animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-500 rounded-full opacity-50 animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full">
            <path fill="#ffffff" d="M0,60 L1440,0 L1440,120 L0,120 Z"></path>
          </svg>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}