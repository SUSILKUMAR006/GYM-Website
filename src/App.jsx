import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import CTA from './components/CTA';
import Coaches from './components/Coaches';
import Pricing from './components/Pricing';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gymDark-950 text-white min-h-screen selection:bg-gymRed selection:text-white">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main>
        <Hero />
        <About />
        <Stats />
        <WhyChooseUs />
        <Services />
        <CTA />
        <Coaches />
        <Pricing />
        <Gallery />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
