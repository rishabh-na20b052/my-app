// src/sections/WhyUsSection.jsx

import React, { useRef, useState, useEffect } from 'react'; // Import useState and useEffect
import { motion, useScroll, useTransform } from 'framer-motion';
import { Lightbulb, Hammer, Rocket, RefreshCw } from 'lucide-react';

// The steps data remains the same
const steps = [
  {
    icon: <Lightbulb size={40} strokeWidth={1.5} />,
    title: "Discovery & Planning",
    content: "Align on goals, audience, timelines, and scope. We prioritize what's most critical to build a roadmap for success.",
  },
  {
    icon: <Hammer size={40} strokeWidth={1.5} />,
    title: "Build & Execute",
    content: "Execute on core product and GTM modules. We work in transparent, agile sprints with tight feedback loops.",
  },
  {
    icon: <Rocket size={40} strokeWidth={1.5} />,
    title: "Go-to-Market",
    content: "Activate your outreach, content funnel, and onboarding to start critical customer conversations from day one.",
  },
  {
    icon: <RefreshCw size={40} strokeWidth={1.5} />,
    title: "Iterate & Optimize",
    content: "Post-launch refinement based on user behavior, market feedback, and performance signals to ensure product-market fit.",
  },
];

const WhyUsSection = () => {
  const targetRef = useRef(null);
  // NEW: A ref for the horizontally scrolling container
  const scrollingContainerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  // NEW: State to hold the calculated scroll offset
  const [scrollOffset, setScrollOffset] = useState(0);

  // NEW: useEffect to calculate the precise scroll distance
  useEffect(() => {
    const calculateScrollOffset = () => {
      const container = scrollingContainerRef.current;
      const target = targetRef.current;
      if (container && target) {
        // Total scrollable width minus the width of the viewport (the section itself)
        const offset = container.scrollWidth - target.clientWidth;
        setScrollOffset(offset);
      }
    };

    // Calculate on initial mount
    calculateScrollOffset();
    
    // Recalculate on window resize to handle responsiveness
    window.addEventListener('resize', calculateScrollOffset);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', calculateScrollOffset);
  }, []); // Empty dependency array means this runs once on mount

  // UPDATED: useTransform now uses the precise pixel offset
  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollOffset]);

  return (
    <section id="how-we" ref={targetRef} className="relative h-[300vh] bg-[rgb(var(--color-background))]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <AuroraBackground />

        {/* The horizontally scrolling content with the new ref */}
        <motion.div
          ref={scrollingContainerRef} // Assign the new ref here
          style={{ x }}
          className="flex gap-8 md:gap-10 pl-16 md:pl-24 pr-16 md:pr-24"
        >
          {/* Introductory Card */}
          <div className="flex-shrink-0 w-[70vw] md:w-[50vw] lg:w-[35vw] flex flex-col justify-center">
            <h2 className="text-4xl md:text-6xl font-bold text-[rgb(var(--color-text-main))] mb-8">
              How We Work
            </h2>
            <p className="text-lg text-[rgb(var(--color-text-secondary))]">
              Our process is a partnership. We move from concept to launch with precision, speed, and a shared vision for success.
            </p>
          </div>

          {/* Map over the steps to create animated cards */}
          {steps.map((step, index) => (
            <Card key={index} {...step} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// --- The Card and AuroraBackground components remain unchanged ---
// (I've included them here for completeness)

const Card = ({ icon, title, content }) => {
  return (
    <div
      className="relative h-[300px] w-[320px] flex-shrink-0 rounded-2xl p-8
                 bg-[rgb(var(--color-surface)/0.5)]
                 backdrop-blur-lg
                 shadow-xl shadow-black/30
                 ring-1 ring-inset ring-white/10"
    >
      <div className="flex justify-start mb-6 text-[rgb(var(--color-primary))]">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold text-[rgb(var(--color-text-main))] mb-4">
        {title}
      </h3>
      <p className="text-base text-[rgb(var(--color-text-secondary))] leading-relaxed">
        {content}
      </p>
      <div className="absolute inset-0 rounded-2xl z-[-1]
                   bg-gradient-to-br from-[rgb(var(--color-primary)/0.1)] to-transparent opacity-50
                   transition-opacity duration-300" />
    </div>
  );
};

const AuroraBackground = () => (
    <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[image:radial-gradient(125%_125%_at_50%_10%,rgb(var(--color-background))_40%,rgb(var(--color-secondary))_100%)] opacity-30"></div>
        <div className="absolute top-0 left-0 w-full h-full">
            <div className="aurora-1"></div>
            <div className="aurora-2"></div>
        </div>
        <style jsx>{`
            @keyframes aurora-1-animation {
                0%, 100% { transform: translateX(0) translateY(0) rotate(0deg); }
                50% { transform: translateX(20%) translateY(10%) rotate(5deg); }
            }
            @keyframes aurora-2-animation {
                0%, 100% { transform: translateX(0) translateY(0) rotate(0deg); }
                50% { transform: translateX(-20%) translateY(-10%) rotate(-5deg); }
            }
            .aurora-1 {
                position: absolute; top: -50%; left: -50%; width: 200%; height: 200%;
                background-image: radial-gradient(circle at center, rgba(var(--color-secondary), 0.5) 0%, transparent 40%);
                animation: aurora-1-animation 25s infinite ease-in-out;
                filter: blur(100px);
            }
            .aurora-2 {
                position: absolute; top: -50%; left: -50%; width: 200%; height: 200%;
                background-image: radial-gradient(circle at center, rgba(var(--color-primary), 0.4) 0%, transparent 35%);
                animation: aurora-2-animation 30s infinite ease-in-out;
                animation-delay: -5s;
                filter: blur(120px);
            }
        `}</style>
    </div>
);

export default WhyUsSection;