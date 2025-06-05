// src/sections/ServicesSection.jsx

import React from 'react';
// Import icons from lucide-react
import { ServerCog, TrendingUp, Network } from 'lucide-react'; // UPDATED IMPORTS

// IconPlaceholder and its assignments are no longer needed
// const IconPlaceholder = ...
// const BriefcaseIcon = IconPlaceholder;
// const ZapIcon = IconPlaceholder;
// const UsersIcon = IconPlaceholder;

const ServicesSection = () => (
  <section id="services" className="py-20 md:py-32 bg-surface/50 min-h-screen flex flex-col justify-center">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-text-main mb-8">
        Your One-Stop Partner for Startup Success
      </h2>
      <p className="text-lg text-text-secondary text-center mb-16 max-w-2xl mx-auto">
        You focus on customers. We’ll take care of the rest.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Service Item 1: Tech Infrastructure */}
        <div className="bg-surface p-6 rounded-xl shadow-lg shadow-primary/10 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 transform hover:scale-105"> {/* Combined transitions */}
          <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10 text-primary"> {/* Moved text-primary here */}
            {/* Use actual ServerCog icon */}
            <ServerCog size={28} strokeWidth={1.75} /> {/* Adjusted size and strokeWidth */}
          </div>
          <h3 className="text-xl font-semibold text-text-main mb-2">Tech Infrastructure</h3>
          <p className="text-text-secondary text-sm">Web & Mobile Apps, AI Software, Data Science, Automation Solutions to build your vision.</p> {/* Added text-sm */}
        </div>

        {/* Service Item 2: Business & Growth */}
        <div className="bg-surface p-6 rounded-xl shadow-lg shadow-primary/10 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 transform hover:scale-105">
          <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10 text-primary">
            {/* Use actual TrendingUp icon */}
            <TrendingUp size={28} strokeWidth={1.75} />
          </div>
          <h3 className="text-xl font-semibold text-text-main mb-2">Business & Growth</h3>
          <p className="text-text-secondary text-sm">Performance Marketing, SEO, CRM, Sales Ops, Branding to scale your reach.</p>
        </div>

        {/* Service Item 3: Industry Network */}
        <div className="bg-surface p-6 rounded-xl shadow-lg shadow-primary/10 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 transform hover:scale-105">
          <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10 text-primary">
            {/* Use actual Network icon */}
            <Network size={28} strokeWidth={1.75} />
          </div>
          <h3 className="text-xl font-semibold text-text-main mb-2">Industry Network</h3>
          <p className="text-text-secondary text-sm">Expertise, Incubator Access, Fundraising Exposure, Partnerships, Hiring Support.</p>
        </div>
      </div>
    </div>
  </section>
);

export default ServicesSection;