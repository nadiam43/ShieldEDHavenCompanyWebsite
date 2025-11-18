// import React from 'react';
import { Rocket, Eye, Heart, Lightbulb, Users, FileCheck, HandHeart } from 'lucide-react';
import CTABanner from '../components/CTABanner';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center text-cyan-500 mb-16">Our Company Story</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
              <p>The idea for ShieldED Haven didn't come from a boardroom or a business plan. It came from a conversation—with my oldest daughter. She was telling me about her pregnancy, about becoming a mother. And as I listened, it hit me: I might be around when my grandson enters school. That thought filled me with joy—and later, with fear. Would he be safe? Would he be protected from the online cruelty I've seen in schools nationwide?</p>
              
              <p>I started researching. I dove into the data, the tools, and the gaps in our education system. What I found disturbed me: too many schools were reactive, too few tools truly worked, and too many kids were suffering silently.</p>
              
              <p className="font-semibold text-gray-900">So, I built something better.</p>
              
              <p>ShieldED Haven is more than a platform. It's a promise. A promise to every parent, every teacher, and every student that they are not alone. With real-time counselors and Artificial Intelligence-powered alerts, we're creating school environments where every child can thrive—especially the ones we love most.</p>
              
              <p>This isn't just a company. It's a legacy for my grandson. And for every innocent child walking into school with a screen in their hand and the world on their shoulders.</p>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl h-96 transform hover:scale-105 transition-transform">
                <div className="w-full h-full flex items-center justify-center">
                  <Users className="w-32 h-32 text-white opacity-50" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8 mb-16">
            <p className="text-xl text-center text-gray-800 font-medium">
              ShieldED Haven is a veteran-owned business dedicated to protecting K-12 students from cyberbullying. Founded by a passionate leader, we are committed to creating a safer digital environment for students, schools, and families.
            </p>
          </div>

          {/* What Makes Us Different */}
          <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-12 mb-16 text-white">
            <h2 className="text-4xl font-bold text-center mb-8">What Makes Us Different</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4 p-6 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all">
                <h3 className="text-2xl font-bold">Real-Time Artificial Intelligence Detection</h3>
                <p className="text-cyan-50">Unlike reactive platforms, our Artificial Intelligence actively monitors and detects cyberbullying as it happens, preventing harm before it escalates.</p>
              </div>
              <div className="space-y-4 p-6 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all">
                <h3 className="text-2xl font-bold">24/7 Counselor Support</h3>
                <p className="text-cyan-50">We provide immediate human support through trained counselors, ensuring students get help when they need it most.</p>
              </div>
              <div className="space-y-4 p-6 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all">
                <h3 className="text-2xl font-bold">Trauma-Informed Approach</h3>
                <p className="text-cyan-50">Our platform is built on trauma-informed care principles, focusing on healing and support rather than just punishment.</p>
              </div>
              <div className="space-y-4 p-6 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all">
                <h3 className="text-2xl font-bold">Customizable Artificial Intelligence Models</h3>
                <p className="text-cyan-50">We tailor our Machine Learning algorithms to each district's specific needs, reducing false positives and improving accuracy.</p>
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white border-4 border-cyan-500 rounded-2xl p-8 hover:shadow-xl transition-all transform hover:-translate-y-2">
              <Rocket className="w-16 h-16 text-cyan-500 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-cyan-500 text-center mb-6">Our Mission</h3>
              <p className="text-gray-700 text-center text-lg">
                To empower schools with Artificial Intelligence-driven tools to detect, prevent, and respond to cyberbullying—ensuring every student learns in a safe, inclusive environment.
              </p>
            </div>

            <div className="bg-white border-4 border-cyan-500 rounded-2xl p-8 hover:shadow-xl transition-all transform hover:-translate-y-2">
              <Eye className="w-16 h-16 text-cyan-500 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-cyan-500 text-center mb-6">Our Vision</h3>
              <p className="text-gray-700 text-center text-lg">
                Our goal is to become the national leader in Artificial Intelligence-driven cyberbullying prevention, empowering schools nationwide with cutting-edge technology that creates safer, more inclusive digital spaces for students.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="bg-white py-12">
            <h2 className="text-5xl font-bold text-center text-cyan-500 mb-12">Our Core Values</h2>
            
            <div className="space-y-6">
              {[
                {
                  icon: Heart,
                  title: 'Empathy',
                  description: 'We prioritize understanding and compassion in all interactions.'
                },
                {
                  icon: Lightbulb,
                  title: 'Innovation',
                  description: 'We develop cutting-edge tools and resources to address evolving challenges.'
                },
                {
                  icon: Users,
                  title: 'Collaboration',
                  description: 'We work together with schools, families, and communities to create lasting change.'
                },
                {
                  icon: FileCheck,
                  title: 'Responsibility',
                  description: 'We promote ethical and responsible digital behavior.'
                },
                {
                  icon: HandHeart,
                  title: 'Integrity',
                  description: 'Our commitment to doing the right thing in all aspects with students, parents, teachers, and admin.'
                }
              ].map((value, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 hover:bg-cyan-50 rounded-lg transition-all transform hover:translate-x-2">
                  <value.icon className="w-8 h-8 text-cyan-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-cyan-500 mb-2">{value.title}</h3>
                    <p className="text-gray-700 text-lg">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <CTABanner />
      </section>
    </div>
  );
}