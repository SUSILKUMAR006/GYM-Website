import React, { useState, useEffect } from 'react';
import { Dumbbell, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Coaches', href: '#coaches' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Gallery', href: '#gallery' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gymDark-950/90 backdrop-blur-md border-b border-white/5 py-4' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center space-x-2 group">
          <div className="bg-gymRed p-2 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
            <Dumbbell className="h-6 w-6 text-white" />
          </div>
          <span className="text-2xl font-black tracking-wider text-white">
            <span className="text-gymRed">V-</span>FITFLOW
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-gymRed transition-colors duration-200 text-sm font-medium uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <button className="px-5 py-2.5 rounded-full border border-white/20 text-white font-semibold hover:border-gymRed hover:text-gymRed transition-all duration-300 text-sm">
            Login
          </button>
          <a
            href="#pricing"
            className="px-6 py-2.5 rounded-full bg-gymRed hover:bg-gymRed-hover text-white font-semibold shadow-lg shadow-gymRed/20 hover:shadow-gymRed/40 transition-all duration-300 text-sm"
          >
            Try Membership
          </a>
        </div>

        {/* Mobile Menu Toggler */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`lg:hidden fixed inset-0 top-[72px] z-40 bg-gymDark-950 backdrop-blur-lg border-t border-white/5 transition-all duration-300 ease-in-out ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
      }`}>
        <div className="px-6 py-8 flex flex-col space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-xl font-semibold text-gray-200 hover:text-gymRed transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-6 border-t border-white/10 flex flex-col space-y-4">
            <button className="w-full py-3 rounded-full border border-white/20 text-white font-semibold hover:border-gymRed transition-colors">
              Login
            </button>
            <a
              href="#pricing"
              onClick={() => setIsOpen(false)}
              className="w-full py-3 rounded-full bg-gymRed hover:bg-gymRed-hover text-white font-semibold text-center"
            >
              Try Membership
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
