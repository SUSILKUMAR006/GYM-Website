import React from 'react';
import { ArrowRight } from 'lucide-react';
import backgroundImg from '../assets/images/Background.png';

export default function CTA() {
  return (
    <section className="py-20 bg-gymDark-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Floating Call to Action Card */}
        <div 
          className="relative rounded-3xl overflow-hidden p-12 md:p-20 text-center border border-white/5 shadow-2xl"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(7, 7, 8, 0.95), rgba(220, 38, 38, 0.15)), url(${backgroundImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Inner Glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-gymDark-950 via-transparent to-transparent opacity-60 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="text-gymRed font-black uppercase tracking-widest text-xs sm:text-sm">
              Start your fitness journey — don't delay it for tomorrow
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-tight">
              Are you ready to reach <br />
              your fitness <span className="text-gymRed text-glow-red">goals?</span>
            </h2>
            <p className="text-gray-300 max-w-xl mx-auto text-sm sm:text-base">
              Get access to premium coaches, customizable diet plans, state-of-the-art facilities, and a supportive fitness community.
            </p>
            <div className="pt-6">
              <a
                href="#pricing"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gymRed hover:bg-gymRed-hover text-white font-bold rounded-full shadow-lg shadow-gymRed/20 hover:shadow-gymRed/40 transition-all duration-300 transform hover:-translate-y-1"
              >
                <span>Join Our Gym</span>
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
