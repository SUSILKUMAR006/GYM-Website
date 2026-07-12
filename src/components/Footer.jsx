import React from 'react';
import { Dumbbell, MapPin, Mail, Phone } from 'lucide-react';

const FacebookIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const InstagramIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);

const TwitterIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

const YoutubeIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gymDark-950 border-t border-white/5 pt-20 pb-10 text-left relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Footer Top Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#home" className="flex items-center space-x-2 w-fit group">
              <div className="bg-gymRed p-2 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                <Dumbbell className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-black tracking-wider text-white">
                <span className="text-gymRed">V-</span>FITFLOW
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              We combine professional coaching, modern science-backed training techniques, and ongoing dedication to help you build your dream body.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="#" className="p-2.5 bg-white/5 hover:bg-gymRed hover:text-white rounded-lg text-gray-400 hover:-translate-y-1 transition-all duration-300">
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a href="#" className="p-2.5 bg-white/5 hover:bg-gymRed hover:text-white rounded-lg text-gray-400 hover:-translate-y-1 transition-all duration-300">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href="#" className="p-2.5 bg-white/5 hover:bg-gymRed hover:text-white rounded-lg text-gray-400 hover:-translate-y-1 transition-all duration-300">
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a href="#" className="p-2.5 bg-white/5 hover:bg-gymRed hover:text-white rounded-lg text-gray-400 hover:-translate-y-1 transition-all duration-300">
                <YoutubeIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 lg:col-start-6 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-gymRed text-sm transition-colors duration-200">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-gymRed text-sm transition-colors duration-200">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-gymRed text-sm transition-colors duration-200">Services</a></li>
              <li><a href="#coaches" className="text-gray-400 hover:text-gymRed text-sm transition-colors duration-200">Coaches</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-gymRed text-sm transition-colors duration-200">Pricing</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-gymRed text-sm transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gymRed text-sm transition-colors duration-200">FAQs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gymRed text-sm transition-colors duration-200">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gymRed text-sm transition-colors duration-200">Support Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gymRed text-sm transition-colors duration-200">System Status</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm text-gray-400">
                <MapPin className="h-5 w-5 text-gymRed flex-shrink-0 mt-0.5" />
                <span>Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-400">
                <Mail className="h-5 w-5 text-gymRed flex-shrink-0" />
                <a href="mailto:info@vfitflow.com" className="hover:text-gymRed transition-colors">info@vfitflow.com</a>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-400">
                <Phone className="h-5 w-5 text-gymRed flex-shrink-0" />
                <a href="tel:+8801812345678" className="hover:text-gymRed transition-colors">+880 1812-345678</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom copyright */}
        <div className="border-t border-white/5 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 space-y-4 md:space-y-0">
          <span>&copy; {currentYear} V-FitFlow Gym. All rights reserved.</span>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
