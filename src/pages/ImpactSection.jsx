// src/sections/ImpactSection.jsx
import React from 'react';
import SonarGridBackground from '../components/visuals/SonarGridBackground'; // Adjust path

const clientNames = [
  "Mojibooks", "Fratem", "Llama", "IronFocus", "Pupila",
  "Ozarke", "OrderAxe", "JoolKart", "Zaakr Net", "Biogetica Health"
];

const ImpactSection = () => {
  return (
    <section
      id="impact"
      className="py-16 md:py-24 min-h-screen flex items-center justify-center relative overflow-hidden bg-background"
    >
      {/* Sonar Grid Background - Positioned to take up the left half */}
      <div className="absolute top-0 left-0 h-full w-1/2 z-0 flex items-center justify-center">
        {/* The SonarGridBackground component will try to center its content within this div */}
        <SonarGridBackground />
      </div>

      {/* Content Area - Centered on the whole section, overlays the sonar grid */}
      <div className="container mx-auto px-4 relative z-10 text-center"> {/* text-center for all content */}
        <div className="max-w-3xl mx-auto"> {/* Max width for the content block */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-blue-500 mb-4 leading-tight">
            25+ Businesses Launched
          </h2>
          <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-purple-500 mb-10 md:mb-12 leading-relaxed">
            Powering Big Outcomes with a Bold Team.
          </p>

          {/* Client Name Cards */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {clientNames.map((name, index) => (
              <div
                key={index}
                className="bg-surface/70 backdrop-blur-sm text-text-main text-sm font-medium px-4 py-2 rounded-md shadow-md border border-white/10 hover:bg-surface/90 transition-colors cursor-default"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;