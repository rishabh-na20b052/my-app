// src/components/AboutUsSection.jsx
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// A reusable component for each section with scroll animation
const ScrollAnimatedSection = ({ title, content }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Map scrollYProgress to scale:
  // 0% visible (at bottom of viewport): scale 0.9
  // 50% visible (roughly centered in viewport): scale 1.05 (pop!)
  // 100% visible (at top of viewport, leaving): scale 0.9 (shrink back down)
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.05, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.5, 1, 1, 0.5]); // Also fade in/out slightly

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      // Added text-center here to align content within the card
      className="bg-[rgb(var(--color-surface))] p-8 md:p-12 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 mb-12 // Reduced mb from 16 to 12
                 transform origin-center border border-[rgba(var(--color-primary),0.2)] text-center" // <-- ADDED text-center
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-[rgb(var(--color-text-main))] mb-6">
        {title}
      </h2>
      <p className="text-lg md:text-xl text-[rgb(var(--color-text-secondary))] leading-relaxed whitespace-pre-line">
        {content}
      </p>
    </motion.div>
  );
};

const AboutUsSection = () => {
  return (
    <section className="relative min-h-[100vh] 
                        flex flex-col justify-center items-center py-24 md:py-32
                        bg-[rgb(var(--color-background))]
                        bg-[radial-gradient(circle_at_top_left,_rgba(var(--color-primary),0.05),_transparent_40%),_radial-gradient(circle_at_bottom_right,_rgba(var(--color-brand-dark),0.1),_transparent_50%)]
                        overflow-hidden">
      <div className="max-w-2xl lg:max-w-3xl mx-auto px-6 z-10"> {/* <-- REDUCED WIDTH: Changed from 3xl/4xl to 2xl/3xl */}
        <ScrollAnimatedSection
          // Icons removed from separate prop and just included in the title string
          title="Who We Work With"
          content={`We work with early-stage founders, business first entrepreneurs, and digital teams across industries. Whether you're building your MVP, scaling internal systems, or preparing to go live - we can help.`}
        />

        <ScrollAnimatedSection
          title="Who We Are"
          content={`We're a team of experienced product builders, engineers, and GTM operators from top-tier companies like Google, AB InBev, Meesho, Appian, Amazon, and BCG.

We’re AI-native. We think in systems. We care about velocity. And we ship with you, not for you.`}
        />
      </div>

      {/* --- Animated Background Blobs using your color palette --- */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="w-96 h-96 bg-[rgb(var(--color-primary))] rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob top-10 left-10"></div>
        <div className="w-96 h-96 bg-[rgb(var(--color-brand-dark))] rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000 bottom-10 right-10"></div>
        <div className="w-96 h-96 bg-[rgb(var(--color-text-secondary))] rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      </div>
    </section>
  );
};

export default AboutUsSection;