import { useState } from 'react';
import { Briefcase, GraduationCap, Shield, Linkedin, Twitter, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import CTABanner from '../components/CTABanner';


const CareerPage = () => {
  const [activeTab, setActiveTab] = useState<'career' | 'internship'>('career');

  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center text-cyan-500 mb-8">
            Join the Mission. Shape the Future
          </h2>
          <p className="text-xl text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            We're seeking passionate individuals committed to helping create safer, more respectable digital environments in schools.
          </p>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 rounded-full p-2 inline-flex">
              <button
                onClick={() => setActiveTab('career')}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  activeTab === 'career'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Briefcase className="w-5 h-5 inline mr-2" />
                Career Opportunities
              </button>
              <button
                onClick={() => setActiveTab('internship')}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  activeTab === 'internship'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <GraduationCap className="w-5 h-5 inline mr-2" />
                Internship Opportunities
              </button>
            </div>
          </div>

          {/* Career Form */}
          {activeTab === 'career' && (
            <div className="max-w-3xl mx-auto">
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 shadow-xl">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-3xl font-bold text-cyan-600 mb-4">Career Opportunities</h3>
                    <p className="text-gray-700">
                      Join our team of passionate professionals dedicated to creating safer digital environments for students.
                    </p>
                  </div>
                  <Briefcase className="w-16 h-16 text-cyan-500" />
                </div>

                <div className="space-y-6">
                  {/* Form Inputs */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2 text-sm">First Name *</label>
                      <input type="text" className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2 text-sm">Last Name *</label>
                      <input type="text" className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none transition-all" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-sm">Email *</label>
                    <input type="email" className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none transition-all" />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-sm">Phone</label>
                    <input type="tel" className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none transition-all" />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-sm">LinkedIn Profile *</label>
                    <input type="url" placeholder="https://linkedin.com/in/yourprofile" className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none transition-all" />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-sm">Position Applying For *</label>
                    <input type="text" className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none transition-all" />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-sm">Resume *</label>
                    <div className="border-4 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-cyan-500 transition-colors cursor-pointer bg-white">
                      <div className="text-4xl mb-2 text-cyan-500">📄</div>
                      <div className="text-gray-600 text-sm font-medium">Click to upload or drag and drop</div>
                      <div className="text-gray-400 text-xs mt-1">PDF, DOC, DOCX (Max 5MB)</div>
                    </div>
                  </div>

                  <button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-4 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all transform hover:scale-105 shadow-lg">
                    Submit Application
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Internship Form */}
          {activeTab === 'internship' && (
            <div className="max-w-3xl mx-auto">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-xl">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-3xl font-bold text-purple-600 mb-4">Internship Opportunities</h3>
                    <p className="text-gray-700">
                      Gain hands-on experience and make a real impact while learning from industry professionals.
                    </p>
                  </div>
                  <GraduationCap className="w-16 h-16 text-purple-500" />
                </div>

                <div className="space-y-6">
                  {/* Form Inputs */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2 text-sm">First Name *</label>
                      <input type="text" className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2 text-sm">Last Name *</label>
                      <input type="text" className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-all" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-sm">Email *</label>
                    <input type="email" className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-all" />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-sm">Phone</label>
                    <input type="tel" className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-all" />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-sm">University/College *</label>
                    <input type="text" className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-all" />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-sm">Major/Field of Study *</label>
                    <input type="text" className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-all" />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-sm">Expected Graduation Date *</label>
                    <input type="date" className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-all" />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-sm">Resume *</label>
                    <div className="border-4 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-purple-500 transition-colors cursor-pointer bg-white">
                      <div className="text-4xl mb-2 text-purple-500">📄</div>
                      <div className="text-gray-600 text-sm font-medium">Click to upload or drag and drop</div>
                      <div className="text-gray-400 text-xs mt-1">PDF, DOC, DOCX (Max 5MB)</div>
                    </div>
                  </div>

                  <button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold py-4 rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg">
                    Submit Application
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <CTABanner />
      </section>
    </div>
  );
};

export default CareerPage;
