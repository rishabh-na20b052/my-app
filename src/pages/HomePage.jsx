import React from 'react';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import WhyUsSection from './WhyUsSection';
import ImpactSection from './ImpactSection';
import ContactSection from './ContactSection';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-hero-pattern">
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <ImpactSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;