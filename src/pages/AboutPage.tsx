import React, { useEffect } from "react";
import { Rocket, Eye, Heart, Lightbulb, Users, FileCheck, HandHeart } from "lucide-react";
import CTABanner from "../components/CTABanner";
import Chris from "../assets/Chris.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutPage() {
  // Initialize Animate On Scroll library when component mounts
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-white pt-20" style={{ fontFamily: "Poppins, sans-serif" }}>
      <section className="py-0 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">

          {/* Company Story Title */}
          <h2
            className="text-5xl font-bold text-center text-cyan-500 mb-16"
            data-aos="fade-up"
          >
            Our Company Story
          </h2>

          {/* Story Text + Founder Image */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">

            {/* Left Column: Story Paragraphs */}
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
              <p data-aos="fade-right">
                The idea for ShieldED Haven didn't come from a boardroom or a business plan. It came from a conversation—with my oldest daughter. She was telling me about her pregnancy, about becoming a mother. And as I listened, it hit me: I might be around when my grandson enters school. That thought filled me with joy—and later, with fear. Would he be safe? Would he be protected from the online cruelty I've seen in schools nationwide?
              </p>

              <p data-aos="fade-right" data-aos-delay="100">
                I started researching. I dove into the data, the tools, and the gaps in our education system. What I found disturbed me: too many schools were reactive, too few tools truly worked, and too many kids were suffering silently.
              </p>

              <p className="font-semibold text-gray-900" data-aos="fade-right" data-aos-delay="200">
                So, I built something better.
              </p>

              <p data-aos="fade-right" data-aos-delay="300">
                ShieldED Haven is more than a platform. It's a promise. A promise to every parent, every teacher, and every student that they are not alone. With real-time counselors and Artificial Intelligence-powered alerts, we're creating school environments where every child can thrive—especially the ones we love most.
              </p>

              <p data-aos="fade-right" data-aos-delay="400">
                This isn't just a company. It's a legacy for my grandson. And for every innocent child walking into school with a screen in their hand and the world on their shoulders.
              </p>
            </div>

            {/* Right Column: Founder Image */}
            <div className="relative flex justify-center" data-aos="fade-left">
              <img
                src={Chris}
                alt="Founder Chris"
                className="rounded-2xl shadow-2xl w-full max-w-sm object-contain"
              />
            </div>
          </div>

          {/* Veteran-Owned Banner */}
          <div
            className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8 mb-16"
            data-aos="zoom-in"
          >
            <p className="text-xl text-center text-gray-800 font-medium">
              ShieldED Haven is a veteran-owned business dedicated to protecting K-12 students from cyberbullying. Founded by a passionate leader, we are committed to creating a safer digital environment for students, schools, and families.
            </p>
          </div>

          {/* What Makes Us Different Section */}
          <div
            className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-12 mb-16 text-white"
            data-aos="fade-up"
          >
            <h2 className="text-4xl font-bold text-center mb-8">
              What Makes Us Different
            </h2>

            {/* Grid of Features */}
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Real-Time Artificial Intelligence Detection",
                  desc: "Unlike reactive platforms, our Artificial Intelligence actively monitors and detects cyberbullying as it happens, preventing harm before it escalates."
                },
                {
                  title: "24/7 Counselor Support",
                  desc: "We provide immediate human support through trained counselors, ensuring students get help when they need it most."
                },
                {
                  title: "Trauma-Informed Approach",
                  desc: "Our platform is built on trauma-informed care principles, focusing on healing and support rather than just punishment."
                },
                {
                  title: "Customizable Artificial Intelligence Models",
                  desc: "We tailor our Machine Learning algorithms to each district's specific needs, reducing false positives and improving accuracy."
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="space-y-4 p-6 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all"
                  data-aos="fade-up"
                  data-aos-delay={i * 150}
                >
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p className="text-cyan-50">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mission & Vision Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">

            {/* Mission Card */}
            <div
              className="bg-white border-4 border-cyan-500 rounded-2xl p-8 transition-colors duration-500 transform hover:-translate-y-2 hover:shadow-xl hover:bg-[#F5FBFF]"
              data-aos="fade-right"
            >
              <Rocket className="w-16 h-16 text-cyan-500 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-cyan-500 text-center mb-6">Our Mission</h3>
              <p className="text-gray-700 text-center text-lg">
                To empower schools with Artificial Intelligence-driven tools to detect, prevent, and respond to cyberbullying—ensuring every student learns in a safe, inclusive environment.
              </p>
            </div>

            {/* Vision Card */}
            <div
              className="bg-white border-4 border-cyan-500 rounded-2xl p-8 transition-colors duration-500 transform hover:-translate-y-2 hover:shadow-xl hover:bg-[#F5FBFF]"
              data-aos="fade-left"
            >
              <Eye className="w-16 h-16 text-cyan-500 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-cyan-500 text-center mb-6">Our Vision</h3>
              <p className="text-gray-700 text-center text-lg">
                Our goal is to become the national leader in Artificial Intelligence-driven cyberbullying prevention, empowering schools nationwide with cutting-edge technology that creates safer, more inclusive digital spaces for students.
              </p>
            </div>
          </div>

          {/* Core Values Section */}
          <div className="bg-white py-12" data-aos="fade-up">
            <h2 className="text-5xl font-bold text-center text-cyan-500 mb-12">
              Our Core Values
            </h2>

            {/* List of Core Values */}
            <div className="space-y-6">
              {[
                { icon: Heart, title: "Empathy", description: "We prioritize understanding and compassion in all interactions." },
                { icon: Lightbulb, title: "Innovation", description: "We develop cutting-edge tools and resources to address evolving challenges." },
                { icon: Users, title: "Collaboration", description: "We work together with schools, families, and communities to create lasting change." },
                { icon: FileCheck, title: "Responsibility", description: "We promote ethical and responsible digital behavior." },
                { icon: HandHeart, title: "Integrity", description: "Our commitment to doing the right thing in all aspects with students, parents, teachers, and admin." },
              ].map((value, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 hover:bg-cyan-50 rounded-lg transition-all transform hover:translate-x-2"
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                >
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

        {/* Call-to-Action Banner */}
        <CTABanner />
      </section>
    </div>
  );
}
