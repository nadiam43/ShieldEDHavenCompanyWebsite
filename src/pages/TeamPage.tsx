import { useState, useEffect } from 'react';
import { Users, ChevronLeft, ChevronRight } from 'lucide-react'; // Icons
import { motion } from 'framer-motion'; // Animation library
import CTABanner from '../components/CTABanner'; // CTA component at the bottom

// Images for leadership team
import ChrisImg from '../assets/Chris.jpg';
import HunterImg from '../assets/hunter.jpg';
import UzmaImg from '../assets/uzma.jpg';
import MattieImg from '../assets/mattie.jpeg';
import AlexImg from '../assets/Alex3.jpeg';
import SamanthaImg from '../assets/samantha.jpg';

// Images for interns
import andreImg from '../assets/andre.jpeg';
import noorImg from '../assets/noor.jpeg';
import gabrielaImg from '../assets/gabriela.jpeg';
import garimaImg from '../assets/garima.jpeg';
import alexandraImg from '../assets/alexandra.jpeg';
import luisImg from '../assets/luis.jpeg';
import nadiaImg from '../assets/nadia.jpeg';
import shrutikaImg from '../assets/shrutika.jpeg';
import savannahImg from '../assets/savannah.jpeg';
import dalaneyImg from '../assets/dalaney.jpeg';
import erikaImg from '../assets/erika.jpeg';

export default function TeamPage() {
  // Current intern shown in the carousel
  const [currentIntern, setCurrentIntern] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true); // Auto-play carousel
  const [isTransitioning, setIsTransitioning] = useState(false); // Prevent double clicks during animation

  // Leadership team members
  const teamMembers = [
    { 
      name: 'Chris Hernandez', 
      title: 'Founder/CEO', 
      bio: 'Chris is a retired Army veteran and Texas A&M graduate who founded ShieldED Haven to protect future generations from cyberbullying. With a passion for innovation and service, he leads the company in developing AI-powered safety tools for schools. His vision drives ShieldED Haven’s mission to create safer, more respectful digital environments for students',
      image: ChrisImg
    },
    { 
      name: 'Hunter Howton', 
      title: 'Chief Operations Officer', 
      bio: 'Hunter is an experienced business strategist and Texas A&M graduate who oversees daily operations and strategic initiatives at ShieldED Haven. He brings a strong background in organizational leadership and digital transformation. Through his guidance, the company delivers innovative and dependable solutions that promote online safety for students',
      image: HunterImg
    },
    { 
      name: 'Uzma Hamid', 
      title: 'Chief Technical Officer', 
      bio: 'Uzma is a computer science graduate from Texas A&M with research experience at Stanford and a 4.0 GPA. She leads ShieldED Haven’s technology strategy, leveraging her expertise in AI, machine learning, and cloud computing. Her focus on scalable, secure solutions drives the development of innovative tools that protect children online',
      image: UzmaImg
    },
    { 
      name: 'Mattison Caldwell', 
      title: 'Chief Customer Officer', 
      bio: 'Mattie is a Texas A&M graduate and emerging sales leader dedicated to building meaningful relationships with schools and districts. She brings experience in customer success, social media strategy, and B2B sales. Passionate about child safety, she ensures ShieldED Haven delivers exceptional support and value to every partner school',
      image: MattieImg
    },
    { 
      name: 'Alex Harris', 
      title: 'Chief of Sales', 
      bio: 'AAlexandria is a strategic leader and Texas A&M graduate with expertise in philanthropy, financial strategy, and community engagement. She ensures ShieldED Haven’s mission and resources align to drive sustainable growth. Her leadership strengthens partnerships that expand the organization’s reach and impact in schools nationwide',
      image: AlexImg
    },
    { 
      name: 'Samantha Thompson', 
      title: 'Chief Marketing Officer', 
      bio: 'Samantha is a marketing professional and Texas A&M graduate student specializing in brand strategy, public relations, and digital engagement. She leads marketing efforts that build awareness and trust in ShieldED Haven’s mission. Her creativity and data-driven mindset help connect schools, communities, and stakeholders through impactful campaigns',
      image: SamanthaImg
    }
  ];

  // Interns for carousel
  const interns = [
    { name: 'Luis Benavides', title: 'AI Engineer Intern', bio: 'Luis works on AI development to help innovate ShieldED Haven’s cyberbullying detection platform.', img: luisImg },
    { name: 'Nadia Monani', title: 'AI Engineer Intern', bio: 'Nadia contributes to AI solutions for detecting and preventing cyberbullying in schools.', img: nadiaImg },
    { name: 'Shruthika Naidu', title: 'AI Engineer Intern', bio: 'Shruthika helps build and refine AI tools to support ShieldED Haven’s mission in digital safety.', img: shrutikaImg },
    { name: 'Andre Mordi', title: 'AI Engineer Intern', bio: 'Andre joins the AI team to develop innovative solutions for cyberbullying prevention.', img: andreImg },
    { name: 'Erika Jimenez', title: 'AI/ML Software Developer Intern', bio: 'Erika works on AI and ML software development to enhance cyberbullying prevention tools.', img: erikaImg },
    { name: 'Savannah Higgins', title: 'Automation Software Developer Intern', bio: 'Savannah develops automation software to improve ShieldED Haven’s technological solutions.', img: savannahImg },
    { name: 'Alexandra Vera', title: 'Marketing Intern', bio: 'Alexandra supports marketing initiatives and helps share ShieldED Haven’s mission with communities.', img: alexandraImg },
    { name: 'Dalaney Gutierrez', title: 'Marketing Intern', bio: 'Dalaney assists with marketing strategies and helps raise awareness about ShieldED Haven’s initiatives.', img: dalaneyImg },
    { name: 'Noor Shoubaki', title: 'Operations Intern', bio: 'Noor supports operational excellence and helps streamline processes for the team.', img: noorImg },
    { name: 'Gabriela Diaz', title: 'Operations Intern', bio: 'Gabby assists the operations team and contributes fresh ideas to upcoming projects.', img: gabrielaImg },
    { name: 'Garima Shanthilal', title: 'Operations Intern', bio: 'Garima brings energy and perspective to strengthen ShieldED Haven’s operations.', img: garimaImg }
  ];

  // Auto-play the carousel every 3.5 seconds
  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        handleNext();
      }, 3500);
      return () => clearInterval(interval);
    }
  }, [autoPlay, currentIntern]);

  // Move to next intern in carousel
  const handleNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIntern((p) => (p + 1) % interns.length);
        setIsTransitioning(false);
      }, 300);
    }
  };

  // Move to previous intern in carousel
  const handlePrev = () => {
    if (!isTransitioning) {
      setAutoPlay(false); // stop autoplay if user clicks
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIntern((p) => (p - 1 + interns.length) % interns.length);
        setIsTransitioning(false);
      }, 300);
    }
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Leadership Section */}
          <h2 className="text-5xl font-bold text-center text-cyan-500 mb-16" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Our Leadership Team
          </h2>

          {/* Leadership Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }} // Start slightly below and invisible
                whileInView={{ opacity: 1, y: 0 }} // Animate in when visible
                viewport={{ once: true, amount: 0.2 }} // Animate only once
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: index * 0.15 // stagger cards
                }}
                whileHover={{ y: -10 }} // Slight lift on hover
                className="group bg-gradient-to-br from-white to-cyan-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border-2 border-cyan-200"
              >
                {/* Image section */}
                <div className="bg-gradient-to-br from-cyan-500 to-blue-600 h-48 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black opacity-10"></div> {/* subtle overlay */}
                  <div className="relative z-10 w-45 h-45 rounded-full overflow-hidden shadow-2xl">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Text section */}
                <div className="p-6">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 px-4 rounded-xl mb-4 shadow-lg">
                    <h3 className="text-xl font-bold text-center">{member.name}</h3>
                    <p className="text-sm text-center text-cyan-100 mt-1">{member.title}</p>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Intern Carousel Section */}
          <div className="mt-20">
            <h2 className="text-5xl font-bold text-center text-purple-500 mb-16" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Meet Our Interns
            </h2>

            {/* Carousel container */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="relative bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-2xl overflow-hidden max-w-4xl mx-auto"
            >

              {/* Current intern card */}
              <motion.div
                key={currentIntern}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="p-12"
              >
                <div className="text-center">
                  <div className="w-50 h-50 rounded-full overflow-hidden mx-auto mb-6 shadow-xl">
                    <img
                      src={interns[currentIntern].img}
                      alt={interns[currentIntern].name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Intern Name & Title */}
                  <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white py-4 px-6 rounded-xl inline-block mb-6 shadow-lg">
                    <h3 className="text-2xl font-bold">{interns[currentIntern].name}</h3>
                    <p className="text-purple-100">{interns[currentIntern].title}</p>
                  </div>

                  {/* Intern Bio */}
                  <p className="text-gray-700 text-lg max-w-2xl mx-auto">
                    {interns[currentIntern].bio}
                  </p>
                </div>
              </motion.div>

              {/* Carousel Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-purple-500 hover:bg-purple-600 text-white p-3 rounded-full shadow-lg transition-all transform hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-purple-500 hover:bg-purple-600 text-white p-3 rounded-full shadow-lg transition-all transform hover:scale-110"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Carousel dots */}
              <div className="flex justify-center gap-2 pb-6">
                {interns.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setAutoPlay(false); // stop autoplay when clicked
                      setCurrentIntern(index);
                    }}
                    className={`h-3 rounded-full transition-all ${
                      index === currentIntern ? 'bg-purple-500 w-8' : 'bg-gray-300 w-3'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Call to Action Banner */}
      <CTABanner />

    </div>
  );
}
