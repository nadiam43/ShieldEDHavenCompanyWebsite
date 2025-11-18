
import { useState, useEffect } from 'react';
import { Users, ChevronLeft, ChevronRight } from 'lucide-react';

export default function TeamPage() {
  const [currentIntern, setCurrentIntern] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  // Auto-play carousel for interns
  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        setCurrentIntern((prev) => (prev + 1) % interns.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [autoPlay]);

  const teamMembers = [
    {
      name: 'Chris Hernandez',
      title: 'Founder/CEO',
      bio: 'Chris is a retired Army veteran and Texas A&M graduate who founded ShieldED Haven to protect future generations from cyberbullying. His vision drives the company in developing Artificial Intelligence-powered safety tools for schools to create safer, more respectful digital environments for students.',
      image: '/api/placeholder/400/400'
    },
    {
      name: 'Hunter Howton',
      title: 'Chief Operations Officer',
      bio: 'Hunter is an experienced business strategist and Texas A&M graduate who oversees daily operations and strategic initiatives. He brings strong organizational leadership skills and through his guidance, the company delivers innovative solutions that promote online safety for students.',
      image: '/api/placeholder/400/400'
    },
    {
      name: 'Uzma Hamid',
      title: 'Chief Technical Officer',
      bio: 'Uzma is a computer science graduate from Texas A&M with research experience at Stanford and Cal QCel. She leads ShieldED Haven\'s technology strategy, leveraging expertise in Artificial Intelligence, machine learning, and cloud computing to develop innovative tools that protect children online.',
      image: '/api/placeholder/400/400'
    },
    {
      name: 'Mattison Caldwell',
      title: 'Chief Customer Officer',
      bio: 'Mattie is a Texas A&M graduate and emerging sales leader dedicated to building meaningful relationships with schools and districts. She brings experience in customer success and social media strategy, ensuring ShieldED Haven delivers exceptional support and value to every partner school.',
      image: '/api/placeholder/400/400'
    },
    {
      name: 'Alex Harris',
      title: 'Chief of Sales',
      bio: 'Alexandria is a strategic leader and Texas A&M graduate with expertise in philanthropy and financial strategy. She ensures ShieldED Haven\'s mission and resources align to drive sustainable growth, strengthening partnerships that expand the organization\'s reach and impact in schools nationwide.',
      image: '/api/placeholder/400/400'
    },
    {
      name: 'Samantha Thompson',
      title: 'Chief Marketing Officer',
      bio: 'Samantha is a marketing professional and Texas A&M graduate student specializing in brand strategy and digital engagement. She leads marketing efforts that build awareness and trust in ShieldED Haven\'s mission, connecting schools and communities through impactful campaigns.',
      image: '/api/placeholder/400/400'
    }
  ];

  const interns = [
    {
      name: 'Sarah Mitchell',
      title: 'Marketing Intern',
      bio: 'Sarah is a junior at Texas A&M studying Marketing. She assists with social media campaigns and content creation to spread awareness about cyberbullying prevention.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'James Chen',
      title: 'Technical Intern',
      bio: 'James is a Computer Science major passionate about AI and machine learning. He works on improving our detection algorithms and platform features.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Emily Rodriguez',
      title: 'Operations Intern',
      bio: 'Emily is studying Business Administration and helps streamline our operational processes to better serve schools and districts.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Michael Thompson',
      title: 'Research Intern',
      bio: 'Michael is pursuing a degree in Psychology and conducts research on the impact of cyberbullying and effective intervention strategies.',
      image: '/api/placeholder/300/300'
    }
  ];

  const nextIntern = () => {
    setCurrentIntern((prev) => (prev + 1) % interns.length);
    setAutoPlay(false);
  };

  const prevIntern = () => {
    setCurrentIntern((prev) => (prev - 1 + interns.length) % interns.length);
    setAutoPlay(false);
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center text-cyan-500 mb-16">Our Leadership Team</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {teamMembers.map((member, index) => (
              <div key={index} className="group bg-gradient-to-br from-white to-cyan-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-cyan-200">
                <div className="bg-gradient-to-br from-cyan-500 to-blue-600 h-48 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black opacity-10"></div>
                  <div className="relative z-10 w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <Users className="w-16 h-16 text-cyan-500" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 px-4 rounded-xl mb-4 shadow-lg">
                    <h3 className="text-xl font-bold text-center">{member.name}</h3>
                    <p className="text-sm text-center text-cyan-100 mt-1">{member.title}</p>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Interns Section */}
          <div className="mt-20">
            <h2 className="text-5xl font-bold text-center text-cyan-500 mb-16">Meet Our Interns</h2>
            
            <div className="relative bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-2xl overflow-hidden max-w-4xl mx-auto">
              <div className="p-12">
                <div className="text-center">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-600 w-40 h-40 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl transform group-hover:scale-110 transition-transform">
                    <Users className="w-20 h-20 text-white" />
                  </div>
                  <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white py-4 px-6 rounded-xl inline-block mb-6 shadow-lg">
                    <h3 className="text-2xl font-bold">{interns[currentIntern].name}</h3>
                    <p className="text-purple-100">{interns[currentIntern].title}</p>
                  </div>
                  <p className="text-gray-700 text-lg max-w-2xl mx-auto">{interns[currentIntern].bio}</p>
                </div>
              </div>

              <button
                onClick={prevIntern}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-purple-500 hover:bg-purple-600 text-white p-3 rounded-full shadow-lg transition-all transform hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextIntern}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-purple-500 hover:bg-purple-600 text-white p-3 rounded-full shadow-lg transition-all transform hover:scale-110"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="flex justify-center gap-2 pb-6">
                {interns.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIntern(index);
                      setAutoPlay(false);
                    }}
                    className={`h-3 rounded-full transition-all ${
                      index === currentIntern ? 'bg-purple-500 w-8' : 'bg-gray-300 w-3'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}