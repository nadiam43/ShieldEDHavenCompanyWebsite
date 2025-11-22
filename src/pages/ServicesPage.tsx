import React, { useEffect } from "react";
import CTABanner from "../components/CTABanner"; // Custom CTA component at the bottom
import AOS from "aos"; // Animate on Scroll library
import "aos/dist/aos.css";

export default function ServicesPage() {
  // Initialize AOS (Animate On Scroll) library when the component mounts
  useEffect(() => {
    AOS.init({ duration: 800, once: true }); 
    // duration: animation lasts 800ms
    // once: animation happens only the first time it scrolls into view
  }, []);

  return (
    <div
      className="min-h-screen bg-gray-50 pt-20"
      style={{ fontFamily: "Poppins, sans-serif" }} // Set Poppins as the font for the page
    >
      <section className="py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">

          {/* PAGE TITLE */}
          <h2
            className="text-5xl font-bold text-center text-cyan-500 mb-8"
            data-aos="fade-up" // Fade in effect on scroll
          >
            Tools to Protect Students and Transform School Culture
          </h2>

          {/* INTRODUCTION PARAGRAPHS */}
          <div
            className="text-gray-700 text-lg leading-relaxed space-y-4 mb-12 max-w-4xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="150" // Delays animation by 150ms
          >
            <p>
              At ShieldED Haven, we offer a comprehensive suite of services designed to detect, prevent, and respond to cyberbullying in K-12 schools. Our platform combines cutting-edge Artificial Intelligence, real-time alert systems, and trauma-informed support tools to create a safer, more respectful digital environment for students. With tiered service options, we ensure that school districts of every size and need can access scalable solutions to address online harassment and foster digital resilience.
            </p>
            <p>
              Each of our service tiers provides a foundation of protection while offering flexibility and additional features based on the level of support and engagement your school district requires.
            </p>
          </div>

          {/* SERVICE TIERS TITLE */}
          <h3
            className="text-4xl font-bold text-center text-cyan-500 mb-12"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Our Service Tiers
          </h3>

          {/* SERVICE TIERS CARDS */}
          <div className="grid md:grid-cols-3 gap-8 mb-16 items-stretch">
            {[
              {
                name: "SHIELDED LITE",
                color: "from-cyan-500 to-blue-500",
                features: [
                  "Artificial Intelligence Powered Detection",
                  "Compliance Tracking",
                  "Real Time Alerts",
                  "Machine Learning Insights",
                ],
              },
              {
                name: "SHIELDED STRONG",
                color: "from-blue-500 to-purple-500",
                features: [
                  "All Lite Features +",
                  "Blockchain Tracking",
                  "Gamification (K-8)",
                  "Student/Counselor Notification (High School)",
                ],
              },
              {
                name: "SHIELDED ELITE",
                color: "from-purple-500 to-pink-500",
                features: [
                  "All Strong Features +",
                  "Social Media Risk Detection",
                  "Artificial Intelligence Model Customization",
                  "24/7 Counselor",
                ],
              },
            ].map((tier, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-xl overflow-hidden transition-colors duration-500 transform hover:-translate-y-2 hover:shadow-2xl border-4 border-transparent ${
                  index === 1
                    ? "hover:border-[#6A5DFF]" // SHIELDED STRONG special hover border
                    : index === 2
                    ? "hover:border-purple-500" // SHIELDED ELITE special hover border
                    : "hover:border-cyan-400"
                } hover:bg-[#F5FBFF] flex flex-col h-full`}
                data-aos="fade-up"
                data-aos-delay={index * 200} // stagger animations
              >

                {/* CARD HEADER */}
                <div className={`bg-gradient-to-r ${tier.color} py-6`}>
                  <div className="h-16 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white text-center leading-tight uppercase tracking-wide">
                      {tier.name}
                    </h3>
                  </div>
                </div>

                {/* CARD BODY */}
                <div className="p-8 flex-1 flex flex-col">
                  <ul className="space-y-4 mb-8 flex-1">
                    {tier.features.map((feature, fIndex) => (
                      <li
                        key={fIndex}
                        className="flex items-start text-gray-700 text-lg"
                      >
                        <span className="text-cyan-500 mr-2">✓</span>
                        <span className="font-semibold">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold py-4 rounded-full hover:from-yellow-500 hover:to-orange-500 hover:shadow-xl transition-all transform hover:scale-105 shadow-lg mt-auto">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* ADD-ON SERVICES TITLE */}
          <h3
            className="text-4xl font-bold text-center text-cyan-500 mb-12"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Additional Add-On Services
          </h3>

          {/* ADD-ON SERVICES CARDS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {[
              {
                title: "Custom Artificial Intelligence Tuning",
                items: [
                  "Tailors Artificial Intelligence and Machine Learning to district specific cyberbullying trends",
                  "Reducing false positives",
                  "Improving detection and accuracy",
                ],
              },
              {
                title: "Staff Training & Workshops",
                items: [
                  "Covers cyberbullying trends",
                  "Legal compliance reports",
                  "ShieldED Haven platform training",
                  "Trauma-informed responses",
                ],
              },
              {
                title: "Advanced Reporting & Analytics",
                items: [
                  "Real-time monitoring",
                  "Trend analysis",
                  "Compliance reports",
                  "Predictive analysis for risk assessment",
                ],
              },
              {
                title: "Parent and Community Engagement",
                items: [
                  "Educates parents on digital safety",
                  "Cyberbullying prevention",
                  "Online risks through workshops and webinars",
                  "Bilingual resources",
                ],
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden transition-colors duration-500 transform hover:-translate-y-2 hover:shadow-2xl border-4 border-transparent hover:border-purple-400 hover:bg-[#FBF5FF] flex flex-col h-full"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                {/* CARD HEADER */}
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 py-4">
                  <div className="h-16 flex items-center justify-center px-2">
                    <h4 className="text-lg font-bold text-white text-center leading-tight">
                      {service.title}
                    </h4>
                  </div>
                </div>

                {/* CARD BODY */}
                <div className="p-6 flex-1 flex flex-col">
                  <ul className="space-y-2 mb-6 flex-1">
                    {service.items.map((item, iIndex) => (
                      <li
                        key={iIndex}
                        className="flex items-start text-gray-700 text-base"
                      >
                        <span className="text-purple-500 mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold py-3 rounded-full hover:from-yellow-500 hover:to-orange-500 hover:shadow-xl transition-all shadow-lg text-sm mt-auto">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA BANNER */}
        <div className="mt-20">
          <CTABanner />
        </div>
      </section>
    </div>
  );
}
