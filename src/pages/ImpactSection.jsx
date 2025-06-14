// src/sections/ImpactSection.jsx
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SonarGridBackground from '../components/visuals/SonarGridBackground'; // Adjust path

const clientNames = [
  "Mojibooks", "Fratem", "Llama", "IronFocus", "Pupila",
  "Ozarke", "OrderAxe", "JoolKart", "Zaakr Net", "Biogetica Health"
];

// Reusable Marquee component, now simplified for this layout
const MarqueeRow = ({ names, direction = 'left' }) => {
  const animationClass = direction === 'left' 
    ? 'animate-[marquee-left_60s_linear_infinite]' 
    : 'animate-[marquee-right_60s_linear_infinite]';

  return (
    <div className={`flex w-max ${animationClass}`}>
      {/* Render the list twice to ensure a seamless loop */}
      {[...Array(2)].map((_, i) => (
        <div key={i} className="flex flex-shrink-0 items-center justify-around w-max gap-4 px-2">
          {names.map((name, index) => (
            <div
              key={index}
              className="bg-[rgb(var(--color-surface))] text-[rgb(var(--color-text-secondary))] text-sm font-medium px-4 py-2 rounded-md ring-1 ring-white/10"
            >
              {name}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

const ImpactSection = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    // Using an offset that starts the animation as the section centers
    offset: ["start center", "end end"],
  });

  // --- ANIMATION LOGIC (UNCHANGED, BUT WILL NOW BE VISIBLE) ---
  const heroScale = useTransform(scrollYProgress, [0.1, 0.5], [1, 1.3]);
  const heroOpacity = useTransform(scrollYProgress, [0.4, 0.6], [1, 0]);
  const subheadOpacity = useTransform(scrollYProgress, [0.55, 0.7], [0, 1]);
  const subheadY = useTransform(scrollYProgress, [0.65, 0.8], [20, 0]);

  return (
    <section
      ref={targetRef} // Ref re-added here
      id="impact"
      className="py-20 md:py-28 relative h-[700px] flex items-center overflow-hidden bg-[rgb(var(--color-background))]"
    >
      <div className="absolute inset-0 z-0">
        <SonarGridBackground />
      </div>

      {/* --- NEW, CORRECTED LAYOUT --- */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center space-y-12">

        {/* Top Marquee */}
        <div className="w-full mask-gradient-y">
          <MarqueeRow names={clientNames} direction="left" />
        </div>

        {/* Centerpiece Text (now in the normal layout flow) */}
        <div className="relative h-48 flex flex-col items-center justify-center text-center">
          <motion.h2
            style={{ scale: heroScale, opacity: heroOpacity }}
            className="absolute inset-0 text-8xl sm:text-9xl lg:text-[12rem] font-extrabold text-[rgb(var(--color-primary))] leading-none flex items-center justify-center"
          >
            25+
          </motion.h2>
          <motion.p
            style={{ opacity: subheadOpacity, y: subheadY }}
            className="absolute inset-0 text-2xl sm:text-3xl lg:text-4xl font-semibold text-[rgb(var(--color-text-main))] leading-relaxed flex items-center justify-center"
          >
            Businesses Launched.
          </motion.p>
        </div>

        {/* Bottom Marquee */}
        <div className="w-full mask-gradient-y">
          <MarqueeRow names={[...clientNames].reverse()} direction="right" />
        </div>
        
      </div>
    </section>
  );
};

export default ImpactSection;