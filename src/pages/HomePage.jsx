// src/pages/HomePage.jsx
import React from 'react'; // Removed useState, useEffect as loading is managed by App
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import WhyUsSection from './WhyUsSection';
import ImpactSection from './ImpactSection';
import ContactSection from './ContactSection';
// Loader is no longer managed here

const HomePage = ({ onHeroVideoReady }) => { // Accept prop from App.jsx
  return (
    // The opacity transition will be managed by App.jsx
    <div className="min-h-screen bg-hero-pattern"> {/* bg-hero-pattern might be redundant if video covers all */}
      <HeroSection onSplineReady={onHeroVideoReady} /> {/* Pass callback down */}
      <ServicesSection />
      <WhyUsSection />
      <ImpactSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;