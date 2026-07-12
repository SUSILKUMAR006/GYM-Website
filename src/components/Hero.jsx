import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import heroImg from '../assets/images/Hero Image.png';

export default function Hero() {
  const cards = [
    {
      title: "Unlimited access to",
      features: [
        "Modern gym facilities",
        "Weekly group classes",
        "Access to locker rooms",
      ],
      primaryBtn: "Try For Free",
      secondaryBtn: "Learn More",
    },
    {
      title: "Unlimited access to",
      features: [
        "All group classes",
        "Personalized fitness plan",
        "1-on-1 coach consultations",
      ],
      primaryBtn: "Try For Free",
      secondaryBtn: "Learn More",
    },
    {
      title: "Unlimited access to",
      features: [
        "24/7 VIP club access",
        "Custom nutrition guides",
        "All home workout guides",
      ],
      primaryBtn: "Try For Free",
      secondaryBtn: "Learn More",
    },
  ];

  return (
    <section id="home" className="relative pt-32 pb-20 bg-gymDark-950 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gymRed/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gymRed/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Main Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 text-left space-y-6 z-10">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-none">
              <span className="font-serif italic text-gray-400 font-normal block mb-2">Shape Your</span>
              <span className="text-gymRed text-glow-red uppercase block text-6xl md:text-8xl">Dream Body</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-xl leading-relaxed">
              Where style meets strength — a modern fitness club for active seekers. Achieve your maximum potential with our expert team and state-of-the-art facilities.
            </p>
            <div className="pt-4">
              <a
                href="#pricing"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gymRed hover:bg-gymRed-hover text-white font-semibold rounded-full shadow-lg shadow-gymRed/20 hover:shadow-gymRed/40 transition-all duration-300 transform hover:-translate-y-1"
              >
                <span>Explore Packages</span>
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-5 relative flex justify-center z-10">
            {/* Background geometric shapes */}
            <div className="absolute inset-0 bg-gradient-to-t from-gymDark-950 via-transparent to-transparent z-10" />
            <div className="relative border-4 border-gymRed/20 rounded-2xl overflow-hidden shadow-2xl shadow-gymRed/10">
              <img
                src={heroImg}
                alt="Shape Your Dream Body"
                className="w-full max-w-[450px] object-cover h-[500px] lg:h-[550px] hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Hero Cards Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-24">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover p-8 rounded-2xl text-left flex flex-col justify-between h-full"
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wider border-b border-white/10 pb-3 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-gymRed mr-2" />
                  {card.title}
                </h3>
                <ul className="space-y-3 mb-8">
                  {card.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start text-gray-300 text-sm">
                      <span className="bg-gymRed/20 text-gymRed p-1 rounded-full mr-3 mt-0.5">
                        <Check className="h-3 w-3" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-auto">
                <button className="text-sm font-semibold text-gymRed hover:text-white transition-colors duration-200 uppercase tracking-wider">
                  {card.primaryBtn}
                </button>
                <button className="px-4 py-2 text-xs font-semibold rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors duration-200 uppercase tracking-wider">
                  {card.secondaryBtn}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
