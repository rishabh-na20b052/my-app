// src/sections/ServicesSection.jsx

import React from 'react';
// Import icons from lucide-react
import { Cpu, Rocket, Handshake } from 'lucide-react'; 

// IconPlaceholder and its assignments are no longer needed
// const IconPlaceholder = ...
// const BriefcaseIcon = IconPlaceholder;
// const ZapIcon = IconPlaceholder;
// const UsersIcon = IconPlaceholder;

const ServicesSection = () => (
  <section id="services" className="py-20 md:py-32  min-h-screen flex flex-col justify-center bg-gradient-to-tr from-purple-600 via-purple-800 to-black-900">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-text-main mb-32">
        At our core, we’re a tech company - building high-performance software infrastructure for fast-moving startups. We also offer growth and traction support to unlock early revenue.
      </h2>
     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Service Item 1: AI-Led Software Development */}
        <div className="bg-surface p-6 rounded-xl shadow-lg shadow-primary/10 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 transform hover:scale-105">
          <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10 text-primary">
            <Cpu size={28} strokeWidth={1.75} /> {/* Icon for AI-Led Software */}
          </div>
          <h3 className="text-xl font-semibold text-text-main mb-2">AI-Led Software Development</h3>
          <p className="text-text-secondary text-sm">
            We build full-stack products - Mobile Application & Web Application, modular systems, and internal tools — fast, cost-efficient, and built to scale.
          </p>
        </div>

        {/* Service Item 2: Digital-First Growth & Revenue Activation */}
        <div className="bg-surface p-6 rounded-xl shadow-lg shadow-primary/10 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 transform hover:scale-105">
          <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10 text-primary">
            <Rocket size={28} strokeWidth={1.75} /> {/* Icon for Digital-First Growth */}
          </div>
          <h3 className="text-xl font-semibold text-text-main mb-2">Digital-First Growth & Revenue Activation</h3>
          <p className="text-text-secondary text-sm">
            For select clients, we offer AI-enabled Go To Market support: landing pages, CRM flows, performance + organic marketing, and partnership outreach — optimized for conversion and efficiency from day one.
          </p>
        </div>

        {/* Service Item 3: Strategic Execution */}
        <div className="bg-surface p-6 rounded-xl shadow-lg shadow-primary/10 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 transform hover:scale-105">
          <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10 text-primary">
            <Handshake size={28} strokeWidth={1.75} /> {/* Icon for Strategic Execution */}
          </div>
          <h3 className="text-xl font-semibold text-text-main mb-2">Strategic Execution</h3>
          <p className="text-text-secondary text-sm">
            We operate like a co-founder with a playbook — fast iterations, tight feedback loops, and warm intros to investors, advisors, and operator networks.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default ServicesSection;