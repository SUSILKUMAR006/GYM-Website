import React, { useState } from 'react';
import { ZoomIn, X } from 'lucide-react';

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&auto=format&fit=crop&q=80",
      title: "Deadlift Power",
      tag: "Strength",
    },
    {
      src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&auto=format&fit=crop&q=80",
      title: "Modern Weights Area",
      tag: "Facilities",
    },
    {
      src: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=600&auto=format&fit=crop&q=80",
      title: "Speed Sprinting",
      tag: "Cardio",
    },
    {
      src: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&auto=format&fit=crop&q=80",
      title: "Bicep Concentration Curls",
      tag: "Hypertrophy",
    },
    {
      src: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=600&auto=format&fit=crop&q=80",
      title: "Heavy Battle Ropes",
      tag: "HIIT",
    },
    {
      src: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=600&auto=format&fit=crop&q=80",
      title: "Intense Boxing Sparring",
      tag: "Endurance",
    },
    {
      src: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&auto=format&fit=crop&q=80",
      title: "Kettlebell Warmups",
      tag: "Functional",
    },
    {
      src: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=600&auto=format&fit=crop&q=80",
      title: "Crossfit Group Workout",
      tag: "Group Class",
    },
    {
      src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&auto=format&fit=crop&q=80",
      title: "Post-Workout Recovery",
      tag: "Yoga & Stretch",
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-gymDark-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="px-3 py-1 bg-gymRed/10 border border-gymRed/20 text-gymRed text-xs font-bold tracking-widest uppercase rounded-full">
            Spectrum Gallery
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mt-4 uppercase tracking-tight">
            Where every workout <br />
            <span className="text-gymRed">brings results</span>
          </h2>
          <p className="text-gray-400 mt-4 text-sm leading-relaxed">
            Take a visual tour of our modern setups, high energy workout spaces, and elite community.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImg(img.src)}
              className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer border border-white/5 shadow-md shadow-black/45"
            >
              {/* Overlay hover effect */}
              <div className="absolute inset-0 bg-gymDark-950/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center items-center z-10 p-4">
                <ZoomIn className="h-8 w-8 text-gymRed mb-2 transform scale-75 group-hover:scale-100 transition-transform duration-300" />
                <h4 className="text-lg font-bold text-white uppercase tracking-wider text-center">
                  {img.title}
                </h4>
                <span className="text-xs text-gymRed font-black uppercase mt-1 tracking-widest">
                  {img.tag}
                </span>
              </div>

              {/* Main Image */}
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div 
          onClick={() => setSelectedImg(null)}
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 cursor-zoom-out animate-fade-in"
        >
          <button 
            onClick={() => setSelectedImg(null)}
            className="absolute top-6 right-6 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 p-2.5 rounded-full"
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="max-w-4xl max-h-[85vh] overflow-hidden rounded-2xl border border-white/10">
            <img 
              src={selectedImg} 
              alt="Enlarged gallery view" 
              className="w-full h-full max-h-[85vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
