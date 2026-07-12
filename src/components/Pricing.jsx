import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: "Beginner",
      price: "$55",
      period: "/ Month",
      desc: "Perfect start for casual gym goers looking to begin their fitness routine.",
      features: [
        "Unlimited Gym Access",
        "Standard Locker Room Access",
        "1 Fitness Assessment",
        "Access to free weight area",
      ],
      isPopular: false,
    },
    {
      name: "Professional",
      price: "$89",
      period: "/ Month",
      desc: "Ideal for active trainers wanting classes and meal programs.",
      features: [
        "Unlimited Gym Access",
        "All Fitness Group Classes",
        "Customized Diet & Meal Plan",
        "1 Personal Coach Consult/mo",
      ],
      isPopular: true,
    },
    {
      name: "Business",
      price: "$125",
      period: "/ Month",
      desc: "Elite level coaching, VIP amenities, and 24/7 round-the-clock access.",
      features: [
        "24/7 VIP Gym Access",
        "All Fitness & Specialty Classes",
        "1-on-1 Dedicated Coach",
        "Unlimited Towel & Sauna Service",
      ],
      isPopular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-gymDark-900 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-gymRed/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="px-3 py-1 bg-gymRed/10 border border-gymRed/20 text-gymRed text-xs font-bold tracking-widest uppercase rounded-full">
            Pricing Chart
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mt-4 uppercase tracking-tight">
            Premium <br />
            <span className="text-gymRed">Membership Plan</span>
          </h2>
          <p className="text-gray-400 mt-4 text-sm leading-relaxed max-w-md mx-auto">
            A gym card is a key to unlock unlimited potential. Pick a tier that matches your style and fitness drive.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`glass-card p-8 rounded-3xl text-left flex flex-col justify-between relative transition-all duration-300 ${
                plan.isPopular 
                  ? 'border-gymRed border-2 shadow-xl shadow-gymRed/10 transform md:-translate-y-4' 
                  : 'border-white/5 hover:border-white/20'
              }`}
            >
              {plan.isPopular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gymRed text-white text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                  Most Popular
                </span>
              )}

              <div>
                {/* Plan Header */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed min-h-[40px]">
                    {plan.desc}
                  </p>
                </div>

                {/* Pricing Details */}
                <div className="flex items-baseline mb-8 border-b border-white/10 pb-6">
                  <span className="text-5xl font-black text-white">{plan.price}</span>
                  <span className="text-gray-400 text-sm ml-2">{plan.period}</span>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start text-gray-300 text-sm">
                      <span className="bg-gymRed/15 text-gymRed p-1 rounded-full mr-3 mt-0.5">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                className={`w-full py-4 rounded-xl font-bold uppercase tracking-wider text-sm flex items-center justify-center space-x-2 transition-all duration-300 ${
                  plan.isPopular
                    ? 'bg-gymRed hover:bg-gymRed-hover text-white shadow-lg shadow-gymRed/25'
                    : 'bg-white/5 hover:bg-white/10 text-white'
                }`}
              >
                <span>Purchase Now</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
