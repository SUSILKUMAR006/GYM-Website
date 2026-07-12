import React from 'react';
import { ArrowRight, UserCheck, Shield, ClipboardList, Target, Apple, MapPin } from 'lucide-react';
import trainerImg from '../assets/images/Trainer.png';

export default function WhyChooseUs() {
  const leftFeatures = [
    {
      icon: <UserCheck className="h-5 w-5 text-white" />,
      title: "Professional Fitness Trainers",
      desc: "Train with certified experts guiding your fitness journey with proper form and motivation.",
    },
    {
      icon: <Shield className="h-5 w-5 text-white" />,
      title: "Advanced Fitness Equipment",
      desc: "State-of-the-art facilities featuring modern training machines and free weight areas.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-white" />,
      title: "Tailored Fitness Solutions",
      desc: "Workouts customized exactly for your unique body type, lifestyle, and training goals.",
    },
  ];

  const rightFeatures = [
    {
      icon: <Target className="h-5 w-5 text-white" />,
      title: "Authentic Fitness Results",
      desc: "Scan real results and transformation success stories from our dedicated members.",
    },
    {
      icon: <Apple className="h-5 w-5 text-white" />,
      title: "Health & Nutrition Coaching",
      desc: "Get expert advice and custom meal plans, calorie counting, and hydration tracking.",
    },
    {
      icon: <MapPin className="h-5 w-5 text-white" />,
      title: "Convenient Location & Hours",
      desc: "Train at premium accessible locations with flexible timetables built around your busy day.",
    },
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-gymDark-900 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gymRed/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="px-3 py-1 bg-gymRed/10 border border-gymRed/20 text-gymRed text-xs font-bold tracking-widest uppercase rounded-full">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mt-4 uppercase tracking-tight">
            Why We're the Right <br />
            <span className="text-gymRed">Choice for You</span>
          </h2>
        </div>

        {/* 3-Column Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Features */}
          <div className="lg:col-span-4 space-y-10 text-left">
            {leftFeatures.map((feat, idx) => (
              <div key={idx} className="flex space-x-4 group">
                <div className="flex-shrink-0">
                  <div className="bg-gymRed p-3 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-md shadow-gymRed/20">
                    {feat.icon}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2 uppercase tracking-wide group-hover:text-gymRed transition-colors duration-200">
                    {feat.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="lg:col-span-4 flex justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-t from-gymDark-900 via-transparent to-transparent z-10" />
            <div className="relative border-4 border-gymRed/30 rounded-2xl overflow-hidden shadow-xl shadow-gymRed/10">
              <img
                src={trainerImg}
                alt="Muscular fitness trainer doing dumbbell curls"
                className="w-full max-w-[320px] object-cover h-[450px] transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Features */}
          <div className="lg:col-span-4 space-y-10 text-left">
            {rightFeatures.map((feat, idx) => (
              <div key={idx} className="flex space-x-4 group">
                <div className="flex-shrink-0">
                  <div className="bg-gymRed p-3 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-md shadow-gymRed/20">
                    {feat.icon}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2 uppercase tracking-wide group-hover:text-gymRed transition-colors duration-200">
                    {feat.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <a
            href="#pricing"
            className="inline-flex items-center space-x-2 px-8 py-3 bg-gymRed hover:bg-gymRed-hover text-white font-semibold rounded-full shadow-lg shadow-gymRed/20 hover:shadow-gymRed/40 transition-all duration-300 transform hover:-translate-y-1"
          >
            <span>Start your training plan</span>
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
