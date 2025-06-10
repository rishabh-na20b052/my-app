// src/components/AboutUsSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

// Animation variant for items sliding in from the sides
const itemVariants = (fromLeft = true) => ({
  hidden: {
    opacity: 0,
    x: fromLeft ? -50 : 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
});

// A reusable component for each content block
const InfoBlock = ({ title, content, alignment = 'left' }) => {
  const isLeftAligned = alignment === 'left';
  // On mobile, everything is left-aligned for better readability
  const textAlignClass = isLeftAligned ? 'md:text-left' : 'md:text-right';
  const containerAlignClass = isLeftAligned ? 'md:items-start' : 'md:items-end';

  return (
    <motion.div
      variants={itemVariants(isLeftAligned)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      // On mobile, all blocks are centered horizontally before taking full width
      className={`flex flex-col items-center md:items-stretch ${containerAlignClass} max-w-2xl w-full text-center md:text-left`}
    >
      <h2 className={`text-4xl md:text-5xl font-extrabold mb-6 text-[rgb(var(--color-background))] ${textAlignClass}`}>
        {title}
      </h2>
      <p className={`text-lg md:text-xl text-[rgba(var(--color-background),0.75)] leading-relaxed whitespace-pre-line ${textAlignClass}`}>
        {content}
      </p>
    </motion.div>
  );
};


const AboutUsSection = () => {
  return (
    <section 
      id="about-us" 
      className="py-24 md:py-32 
                 // --- NEW, WARMER GRADIENT ---
                 // Starts with your cream color and fades to a slightly lighter version.
                 bg-gradient-to-br from-[rgb(var(--color-brand-light))] to-[rgb(var(--color-brand-light)/0.7)]
                 // --- SUBTLE BORDER ---
                 // Adds a top and bottom border using your primary color for definition.
                 border-t border-b border-[rgb(var(--color-primary)/0.2)]"
    >
      <div className="container mx-auto px-6 flex flex-col items-center gap-24 md:gap-32">
        {/* First Block: Left Aligned */}
        <InfoBlock
          alignment="left"
          title="Who We Work With"
          content={`We work with early-stage founders, business-first entrepreneurs, and digital teams across industries. Whether you're building your MVP, scaling internal systems, or preparing to go live - we can help.`}
        />

        {/* Second Block: Right Aligned */}
        <InfoBlock
          alignment="right"
          title="Who We Are"
          content={`We're a team of experienced product builders, engineers, and GTM operators from top-tier companies like Google, AB InBev, Meesho, Appian, Amazon, and BCG.

We’re AI-native. We think in systems. We care about velocity. And we ship with you, not for you.`}
        />
      </div>
    </section>
  );
};

export default AboutUsSection;