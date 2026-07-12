import React from 'react';
import { Flame, Wind, Dumbbell, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Dumbbell className="h-8 w-8 text-gymRed" />,
      tag: "01",
      title: "Beast Strength and Power",
      desc: "Championship workout plans focused on heavy weight training, hypertrophy, and powerlifting to unleash your strength.",
      actionText: "View details",
    },
    {
      icon: <Wind className="h-8 w-8 text-gymRed" />,
      tag: "02",
      title: "Flexibility & Light Yoga",
      desc: "Flexibility, light therapy, hot yoga, and deep muscle restoration routines for optimal full body recovery.",
      actionText: "Get started",
    },
    {
      icon: <Flame className="h-8 w-8 text-gymRed" />,
      tag: "03",
      title: "Tailored Workouts for You",
      desc: "Bespoke cardio, HIIT, and endurance courses crafted exactly for your body composition, energy level, and schedule.",
      actionText: "View details",
    },
  ];

  return (
    <section id="services" className="py-24 bg-gymDark-950 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gymRed/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="px-3 py-1 bg-gymRed/10 border border-gymRed/20 text-gymRed text-xs font-bold tracking-widest uppercase rounded-full">
            Choose Your Focus
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mt-4 uppercase tracking-tight">
            Enjoy bespoke <br />
            <span className="text-gymRed">training choices</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover p-8 rounded-3xl relative text-left group flex flex-col justify-between"
            >
              {/* Badge/Tag */}
              <span className="absolute top-8 right-8 font-black text-4xl text-white/5 group-hover:text-gymRed/20 transition-colors duration-300">
                {item.tag}
              </span>

              <div>
                {/* Icon Wrapper */}
                <div className="bg-gymDark-800 border border-white/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transform group-hover:rotate-6 transition-transform duration-300">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide group-hover:text-gymRed transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  {item.desc}
                </p>
              </div>

              {/* Action Button */}
              <button className="inline-flex items-center space-x-2 text-sm font-semibold uppercase tracking-wider text-white bg-gymRed hover:bg-gymRed-hover py-3 px-6 rounded-xl transition-all duration-300 w-fit self-start">
                <span>{item.actionText}</span>
                <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
