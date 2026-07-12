import React from 'react';
import { Calendar, Clock, ShieldAlert, Award } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      icon: <Clock className="h-6 w-6 text-gymRed" />,
      number: "24/7",
      title: "Open Access",
      desc: "Always open. Fitness that fits your schedule.",
    },
    {
      icon: <Award className="h-6 w-6 text-gymRed" />,
      number: "15+",
      title: "Years of Experience",
      desc: "Helping individuals achieve fitness goals for over a decade.",
    },
    {
      icon: <ShieldAlert className="h-6 w-6 text-gymRed" />,
      number: "100%",
      title: "Certified Coaches",
      desc: "All our trainers are certified professionals with expert credentials.",
    },
    {
      icon: <Calendar className="h-6 w-6 text-gymRed" />,
      number: "50+",
      title: "Weekly Classes",
      desc: "From intense HIIT to relaxing yoga, find your perfect group.",
    },
  ];

  return (
    <section className="py-16 bg-gymDark-950 border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-3">
              <div className="p-3 bg-gymRed/10 rounded-xl border border-gymRed/20 transform hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-white text-glow-red">
                {stat.number}
              </h3>
              <h4 className="text-base font-bold text-white uppercase tracking-wider">
                {stat.title}
              </h4>
              <p className="text-gray-400 text-sm max-w-[220px] leading-relaxed">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
