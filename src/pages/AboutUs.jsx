// src/components/AboutUsSection.jsx
import React from "react";
import { motion } from "framer-motion";

// Enhanced animation variants with smooth entrance effects
const itemVariants = (fromLeft = true) => ({
  hidden: {
    opacity: 0,
    y: 50,
    x: fromLeft ? -30 : 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1], // Smooth custom easing
      staggerChildren: 0.2,
    },
  },
});

// Title animation with typewriter effect
const titleVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Text reveal animation
const textVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.3,
      ease: "easeOut",
    },
  },
};

// Hover animations for the blocks
const hoverVariants = {
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

// Container animation with enhanced staggering
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.2,
    },
  },
};

// Enhanced floating animation with more dynamic movement
const floatingVariants = {
  animate: {
    y: [-15, 25, -15],
    x: [-10, 15, -10],
    rotate: [0, 5, -5, 0],
    scale: [1, 1.1, 1],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// A reusable component for each content block
const InfoBlock = ({ title, content, alignment = "left" }) => {
  const isLeftAligned = alignment === "left";
  const textAlignClass = isLeftAligned ? "md:text-left" : "md:text-right";
  const containerAlignClass = isLeftAligned ? "md:items-start" : "md:items-end";
  

  return (
    <motion.div
      variants={itemVariants(isLeftAligned)}
      whileHover="hover"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={`relative flex flex-col items-center md:items-stretch ${containerAlignClass} max-w-3xl w-full text-center md:text-left cursor-pointer`}
    >
      {/* Remove animated background glow */}
      <motion.div variants={hoverVariants} className="relative z-10 w-full">
        <motion.h2
          variants={titleVariants}
          className={`text-4xl md:text-6xl font-extrabold mb-8 ${textAlignClass} text-[rgb(var(--color-brand-primary))]`}
        >
          {title}
        </motion.h2>
        <motion.div
          variants={textVariants}
          className={`relative ${textAlignClass}`}
        >
          {/* Accent line in primary color */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 200, opacity: 1 }}
            transition={{
              width: { duration: 1.2, delay: 0.6 },
              opacity: { duration: 0.5, delay: 0.6 },
            }}
            className={`h-1 bg-[rgb(var(--color-primary))] mb-6 rounded-full ${
              isLeftAligned ? "mx-0" : "ml-auto"
            }`}
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className={`text-lg md:text-xl text-[rgb(var(--color-brand-primary))] leading-relaxed whitespace-pre-line ${textAlignClass}`}
          >
            {content}
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// Remove animated background elements for a flat look
const BackgroundElements = () => null;

const AboutUsSection = () => {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 overflow-hidden bg-[rgb(var(--color-surface))]"
    >
      {/* No Background Elements */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="relative z-10 container mx-auto px-6 flex flex-col items-center gap-24 md:gap-32"
      >
        <InfoBlock
          alignment="left"
          title="Who We Work With"
          content={`We work with early-stage founders, business-first entrepreneurs, and digital teams across industries. Whether you're building your MVP, scaling internal systems, or preparing to go live - we can help.`}
        />
        <InfoBlock
          alignment="right"
          title="Who We Are"
          content={`We're a team of experienced product builders, engineers, and GTM operators from top-tier companies like Google, AB InBev, Meesho, Appian, Amazon, and BCG.

We're AI-native. We think in systems. We care about velocity. And we ship with you, not for you.`}
        />
      </motion.div>
    </section>
  );
};

export default AboutUsSection;
