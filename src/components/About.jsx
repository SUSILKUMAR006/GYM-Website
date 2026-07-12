import React, { useState } from 'react';
import { Play, X } from 'lucide-react';
import transformationImg from '../assets/images/Transformation.png';

export default function About() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section id="about" className="py-24 bg-gymDark-900 relative overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-gymRed/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Top Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16 text-left items-end">
          <div>
            <span className="px-3 py-1 bg-gymRed/10 border border-gymRed/20 text-gymRed text-xs font-bold tracking-widest uppercase rounded-full">
              About Us
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-4 leading-tight uppercase">
              The Power Behind <br />
              <span className="text-gymRed">Your Vision</span>
            </h2>
            <p className="text-gray-300 mt-6 text-lg leading-relaxed max-w-xl">
              Fitness is dynamic, styling you, inside out. Every body holds a power, waiting for release. We build strength, power, and tailored workout plans that fuel fitness journeys and help you rewrite your health limits.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="glass-card p-6 rounded-2xl border-l-4 border-l-gymRed">
              <h4 className="text-lg font-bold text-white uppercase tracking-wider mb-2">Our Vision</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Empowering everyone to embrace strength, health, and a fulfilling lifestyle through fitness and premium wellness training.
              </p>
            </div>
            <div className="glass-card p-6 rounded-2xl border-l-4 border-l-gymRed">
              <h4 className="text-lg font-bold text-white uppercase tracking-wider mb-2">Our Mission</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Providing high-intensity, tailored workouts and coaching programs that build discipline, power, and lasting fitness habits.
              </p>
            </div>
          </div>
        </div>

        {/* Video / Promo Block */}
        <div className="relative group rounded-2xl overflow-hidden shadow-2xl border border-white/5">
          <div className="absolute inset-0 bg-gymDark-950/40 group-hover:bg-gymDark-950/20 transition-colors duration-300 z-10" />
          <img
            src={transformationImg}
            alt="Gym transformation and training cover"
            className="w-full h-[400px] md:h-[500px] object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
          />

          {/* Floating Play Button Overlay */}
          <div className="absolute inset-0 flex flex-col justify-center items-center z-20">
            <button
              onClick={() => setIsVideoOpen(true)}
              className="w-20 h-20 rounded-full bg-gymRed hover:bg-gymRed-hover text-white flex items-center justify-center shadow-lg shadow-gymRed/50 hover:scale-110 transition-all duration-300 animate-pulse-slow"
              aria-label="Play video"
            >
              <Play className="h-8 w-8 fill-white ml-1" />
            </button>
            <span className="text-white mt-4 font-black uppercase tracking-widest text-sm drop-shadow-md">
              Play Video
            </span>
          </div>
        </div>
      </div>

      {/* Video Modal Backdrop */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-gymDark-950 rounded-2xl overflow-hidden border border-white/10">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white z-10 bg-black/50 p-2 rounded-full"
            >
              <X className="h-6 w-6" />
            </button>
            {/* Embed Placeholder Video */}
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="V-FitFlow Promo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
