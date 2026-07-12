import React from 'react';
import { Check } from 'lucide-react';
import jamesImg from '../assets/images/james.png';
import patriciaImg from '../assets/images/patricia.png';
import markImg from '../assets/images/mark.png';
import joyImg from '../assets/images/joy.png';

export default function Coaches() {
  const features = [
    "Certified Fitness Plans",
    "Nutritionist Advice",
    "Flexible Schedule Hours",
    "Affordable Premium Packages",
  ];

  const trainers = [
    {
      name: "James Anderson",
      role: "Personal Training Coach",
      badge: "Training At Home",
      img: jamesImg,
    },
    {
      name: "Patricia Miller",
      role: "Weight Loss Specialist",
      badge: "Losing Weight",
      img: patriciaImg,
    },
    {
      name: "Mark Peterson",
      role: "Strength & Conditioning Coach",
      badge: "Building Muscle",
      img: markImg,
    },
    {
      name: "Joy Roberts",
      role: "Nutritionist & Lifestyle Coach",
      badge: "Gym Plan",
      img: joyImg,
    },
  ];

  return (
    <section id="coaches" className="py-24 bg-gymDark-950 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gymRed/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Box */}
          <div className="lg:col-span-5 text-left space-y-6">
            <span className="px-3 py-1 bg-gymRed/10 border border-gymRed/20 text-gymRed text-xs font-bold tracking-widest uppercase rounded-full">
              Our Team
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight uppercase">
              Meet the Expert Coaches <br />
              Guiding Your <span className="text-gymRed">Fitness Journey</span>
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Professional coaching, customized workouts, and nutrition guidance to help you reach your fitness dream. Our certified coaches are here to support you at every single step.
            </p>

            <ul className="grid sm:grid-cols-2 gap-4 pt-4">
              {features.map((feat, idx) => (
                <li key={idx} className="flex items-center text-gray-300 text-sm font-semibold">
                  <span className="bg-gymRed/10 border border-gymRed/20 text-gymRed p-1.5 rounded-lg mr-3">
                    <Check className="h-4 w-4" />
                  </span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Cards Grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {trainers.map((trainer, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl overflow-hidden group border border-white/5 hover:border-gymRed/30 transition-all duration-300 shadow-lg text-left"
              >
                {/* Image Wrapper */}
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={trainer.img}
                    alt={trainer.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Badge */}
                  <span className="absolute bottom-4 left-4 px-3 py-1 bg-gymRed text-white text-xs font-black uppercase tracking-wider rounded-md">
                    {trainer.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white uppercase tracking-wide group-hover:text-gymRed transition-colors duration-200">
                    {trainer.name}
                  </h3>
                  <p className="text-gray-400 text-xs mt-1">
                    {trainer.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
