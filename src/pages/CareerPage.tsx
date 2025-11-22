import { useState } from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import CTABanner from '../components/CTABanner';

export default function CareerPage() {
  // Track which tab is active: Career or Internship
  const [activeTab, setActiveTab] = useState<'career' | 'internship'>('career');

  // Track uploaded files for career and internship
  const [careerFile, setCareerFile] = useState<File | null>(null);
  const [internFile, setInternFile] = useState<File | null>(null);

  // Handle career resume file selection
  const handleCareerFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCareerFile(e.target.files[0]);
    }
  };

  // Handle internship resume file selection
  const handleInternFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setInternFile(e.target.files[0]);
    }
  };

  return (
    <div className="min-h-screen bg-white pt-0">
      <section className="pt-20 pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">

          {/* Page Title */}
          <h2
            className="text-5xl font-bold text-center text-cyan-500 mb-8"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Join the Mission. Shape the Future.
          </h2>

          {/* Intro Paragraph */}
          <p className="text-xl text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            We're seeking passionate individuals committed to helping create safer, more respectable digital environments in schools.
          </p>

          {/* Tabs for Career and Internship */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 rounded-full p-2 inline-flex">

              {/* Career Tab Button */}
              <button
                onClick={() => setActiveTab('career')}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  activeTab === 'career'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                }`}
              >
                <Briefcase className="w-5 h-5 inline mr-2" />
                Career Opportunities
              </button>

              {/* Internship Tab Button */}
              <button
                onClick={() => setActiveTab('internship')}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  activeTab === 'internship'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                }`}
              >
                <GraduationCap className="w-5 h-5 inline mr-2" />
                Internship Opportunities
              </button>
            </div>
          </div>

          {/* Career Tab Content */}
          {activeTab === 'career' && (
            <div className="max-w-3xl mx-auto">
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 shadow-xl">

                {/* Header and Icon */}
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-3xl font-bold text-cyan-600 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Career Opportunities
                    </h3>
                    <p className="text-gray-700">
                      Join our team of passionate professionals dedicated to creating safer digital environments for students.
                    </p>
                  </div>
                  <Briefcase className="w-16 h-16 text-cyan-500" />
                </div>

                {/* Career Form */}
                <div className="space-y-6">
                  {/* Name Fields */}
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

                  {/* Email Field */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-sm">Email *</label>
                    <input type="email" className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none transition-all" />
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-sm">Phone</label>
                    <input type="tel" className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none transition-all" />
                  </div>

                  {/* LinkedIn Field */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-sm">LinkedIn Profile *</label>
                    <input type="url" placeholder="https://linkedin.com/in/yourprofile" className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none transition-all" />
                  </div>

                  {/* Position Field */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-sm">Position Applying For *</label>
                    <input type="text" className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none transition-all" />
                  </div>

                  {/* Resume Upload */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-sm">Resume *</label>
                    <input
                      type="file"
                      id="careerFile"
                      accept=".pdf,.doc,.docx"
                      onChange={handleCareerFileChange}
                      className="hidden"
                    />
                    <label
                      htmlFor="careerFile"
                      className="border-4 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-cyan-500 hover:bg-cyan-50 transition-all cursor-pointer bg-white block"
                    >
                      <div className="text-4xl mb-2 text-cyan-500">📄</div>
                      <div className="text-gray-600 text-sm font-medium">
                        {careerFile ? careerFile.name : 'Click to upload or drag and drop'}
                      </div>
                      <div className="text-gray-400 text-xs mt-1">PDF, DOC, DOCX (Max 5MB)</div>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-4 rounded-lg hover:from-cyan-600 hover:to-blue-700 hover:shadow-xl transition-all transform hover:scale-105 shadow-lg">
                    Submit Application
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Internship Tab Content */}
          {activeTab === 'internship' && (
            <div className="max-w-3xl mx-auto">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-xl">

                {/* Header and Icon */}
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-3xl font-bold text-purple-600 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Internship Opportunities
                    </h3>
                    <p className="text-gray-700">
                      Gain hands-on experience and make a real impact while learning from industry professionals.
                    </p>
                  </div>
                  <GraduationCap className="w-16 h-16 text-purple-500" />
                </div>

                {/* Internship Form */}
                <div className="space-y-6">
                  {/* Name Fields */}
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

                  {/* Email */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-sm">Email *</label>
                    <input type="email" className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-all" />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-sm">Phone</label>
                    <input type="tel" className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-all" />
                  </div>

                  {/* University/College */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-sm">University/College *</label>
                    <input type="text" className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-all" />
                  </div>

                  {/* Major/Field of Study */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-sm">Major/Field of Study *</label>
                    <input type="text" className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-all" />
                  </div>

                  {/* Expected Graduation */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-sm">Expected Graduation Date *</label>
                    <input type="date" className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-all" />
                  </div>

                  {/* Resume Upload */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-sm">Resume *</label>
                    <input
                      type="file"
                      id="internFile"
                      accept=".pdf,.doc,.docx"
                      onChange={handleInternFileChange}
                      className="hidden"
                    />
                    <label
                      htmlFor="internFile"
                      className="border-4 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-purple-500 hover:bg-purple-50 transition-all cursor-pointer bg-white block"
                    >
                      <div className="text-4xl mb-2 text-purple-500">📄</div>
                      <div className="text-gray-600 text-sm font-medium">
                        {internFile ? internFile.name : 'Click to upload or drag and drop'}
                      </div>
                      <div className="text-gray-400 text-xs mt-1">PDF, DOC, DOCX (Max 5MB)</div>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold py-4 rounded-lg hover:from-purple-600 hover:to-pink-700 hover:shadow-xl transition-all transform hover:scale-105 shadow-lg">
                    Submit Application
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* CTA Banner at the bottom */}
        <div className="mt-20">
          <CTABanner />
        </div>
      </section>
    </div>
  );
}
