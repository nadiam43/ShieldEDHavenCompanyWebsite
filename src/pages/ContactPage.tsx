import { Shield, Linkedin, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import CTABanner from '../components/CTABanner';

export default function ContactPage() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:contact@shieldedhaven.com';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+15551234567';
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    alert(`${type} copied to clipboard!`);
  };

  return (
    <div className="min-h-screen bg-white pt-20">
        <section className="pt-20 pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center text-cyan-500 mb-12" style={{ fontFamily: 'Poppins, sans-serif' }}>Connect with Us</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>Get In Touch</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Have questions about our program, pricing, partnerships, or how to bring ShieldED Haven to your District? We're here to help. Whether you're an educator, parent, policymaker, or potential partner, we'd love to hear from you.
              </p>
              
              <h4 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Reach out to us about:</h4>
              <div className="space-y-3 text-gray-700 mb-8">
                <p className="flex items-start">
                  <span className="text-cyan-500 mr-2">•</span>
                  <span>Adopting or sponsoring a school</span>
                </p>
                <p className="flex items-start">
                  <span className="text-cyan-500 mr-2">•</span>
                  <span>Platform demos or pilot programs</span>
                </p>
                <p className="flex items-start">
                  <span className="text-cyan-500 mr-2">•</span>
                  <span>Media or press inquiries</span>
                </p>
                <p className="flex items-start">
                  <span className="text-cyan-500 mr-2">•</span>
                  <span>Strategic partnerships</span>
                </p>
                <p className="flex items-start">
                  <span className="text-cyan-500 mr-2">•</span>
                  <span>Technical support or general questions</span>
                </p>
              </div>

              {/* Contact Information Box */}
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Contact Information</h4>
                <div className="space-y-4">

                  {/* Email with Copy Button */}
                  <div className="flex items-center gap-3 group">
                    <Mail className="w-6 h-6 text-cyan-500 flex-shrink-0" />
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleEmailClick}
                        className="text-gray-700 hover:text-cyan-600 hover:underline transition-all"
                      >
                        contact@shieldedhaven.com
                      </button>
                      <button
                        onClick={() => copyToClipboard('contact@shieldedhaven.com', 'Email')}
                        className="text-xs text-gray-500 hover:text-cyan-600 transition-all"
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                  
                  {/* Phone with Copy Button */}
                  <div className="flex items-center gap-3 group">
                    <Phone className="w-6 h-6 text-cyan-500 flex-shrink-0" />
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handlePhoneClick}
                        className="text-gray-700 hover:text-cyan-600 hover:underline transition-all"
                      >
                        (555) 123-4567
                      </button>
                      <button
                        onClick={() => copyToClipboard('(555) 123-4567', 'Phone')}
                        className="text-xs text-gray-500 hover:text-cyan-600 transition-all"
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                  
                  {/* Location */}
                  <div className="flex items-center gap-3 text-gray-700">
                    <MapPin className="w-6 h-6 text-cyan-500 flex-shrink-0" />
                    <span>College Station, Texas</span>
                  </div>
                </div>
              </div>

              {/* Social Media Section */}
              <div className="mt-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Follow Us</h4>
                <div className="flex gap-4">
                  {/* LinkedIn */}
                  <a 
                    href="https://www.linkedin.com/company/shieldedhaven" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-cyan-500 hover:bg-cyan-600 text-white p-3 rounded-full transition-all transform hover:scale-110 shadow-lg"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  
                  {/* X (Twitter) */}
                  <a 
                    href="https://x.com/ShieldedHaven?s=20" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-cyan-500 hover:bg-cyan-600 text-white p-3 rounded-full transition-all transform hover:scale-110 shadow-lg"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  
                  {/* Facebook */}
                  <a 
                    href="https://www.facebook.com/p/Shielded-Haven-61574015247372/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-cyan-500 hover:bg-cyan-600 text-white p-3 rounded-full transition-all transform hover:scale-110 shadow-lg"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  
                  {/* Instagram */}
                  <a 
                    href="https://www.instagram.com/shielded.haven/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-cyan-500 hover:bg-cyan-600 text-white p-3 rounded-full transition-all transform hover:scale-110 shadow-lg"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-gray-200">
              <div className="flex justify-end mb-6">
                <Shield className="w-20 h-20 text-cyan-500" />
              </div>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">First Name *</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none transition-all" 
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Last Name *</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none transition-all" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none transition-all" 
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message *</label>
                  <textarea 
                    rows={5} 
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none transition-all"
                  ></textarea>
                </div>

                <p className="text-sm text-gray-600">
                  Once you submit the form, a member of our team will respond within the day. If your request is time-sensitive, please indicate that in the message.
                </p>

                <p className="text-sm text-gray-900 font-semibold">
                  We take your privacy seriously. All submissions are securely stored and never shared without your consent.
                </p>

                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-4 rounded-lg hover:from-cyan-600 hover:to-blue-700 hover:shadow-xl transition-all transform hover:scale-105 shadow-lg"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>

         <div className="mt-20">
                    <CTABanner />
                </div>
      </section>
    </div>
  );
}
