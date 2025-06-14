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
      {/* Animated background glow that appears on scroll */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/5 to-purple-500/10 rounded-3xl blur-2xl -z-10"
      />

      <motion.div variants={hoverVariants} className="relative z-10 w-full">
        <motion.h2
          variants={titleVariants}
          className={`text-4xl md:text-6xl font-extrabold mb-8 ${textAlignClass}
                     bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent
                     drop-shadow-2xl`}
        >
          {title}
        </motion.h2>

        <motion.div
          variants={textVariants}
          className={`relative ${textAlignClass}`}
        >
          {/* Beautiful accent line with sequential animation */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 80, opacity: 1 }}
            transition={{
              width: { duration: 1.2, delay: 0.6 },
              opacity: { duration: 0.5, delay: 0.6 },
            }}
            className={`h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mb-6 rounded-full ${
              isLeftAligned ? "md:mx-0 mx-auto" : "md:ml-auto mx-auto"
            }`}
          />

          {/* Animated text with word-by-word reveal */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className={`text-lg md:text-xl text-gray-200 leading-relaxed whitespace-pre-line ${textAlignClass}
                        drop-shadow-lg`}
          >
            {content}
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// Animated background elements
const BackgroundElements = () => (
  <>
    {/* Beautiful floating gradient orbs with enhanced movement */}
    <motion.div
      variants={floatingVariants}
      animate="animate"
      className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl"
    />
    <motion.div
      variants={floatingVariants}
      animate="animate"
      style={{ animationDelay: "2s" }}
      className="absolute bottom-32 right-16 w-56 h-56 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl"
    />
    <motion.div
      variants={floatingVariants}
      animate="animate"
      style={{ animationDelay: "4s" }}
      className="absolute top-1/2 left-1/3 w-32 h-32 bg-gradient-to-r from-indigo-500/20 to-cyan-400/20 rounded-full blur-2xl"
    />
    <motion.div
      variants={floatingVariants}
      animate="animate"
      style={{ animationDelay: "6s" }}
      className="absolute top-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-emerald-400/25 to-blue-400/25 rounded-full blur-2xl"
    />

    {/* Enhanced animated particles with different patterns */}
    <div className="absolute inset-0">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0.5, 1, 0],
            scale: [0, 1, 0.8, 1.2, 0],
            x: [0, Math.random() * 200 - 100, Math.random() * 150 - 75],
            y: [0, Math.random() * 200 - 100, Math.random() * 150 - 75],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12 + Math.random() * 6,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "easeInOut",
          }}
          className="absolute w-1 h-1 bg-cyan-400/60 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>

    {/* Animated constellation lines */}
    <motion.svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.3 }}
      transition={{ duration: 3, delay: 1 }}
    >
      <motion.path
        d="M 100 200 Q 300 100 500 200 T 900 200"
        stroke="url(#gradient1)"
        strokeWidth="1"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 4, delay: 2, ease: "easeInOut" }}
      />
      <motion.path
        d="M 200 400 Q 400 300 600 400 T 800 400"
        stroke="url(#gradient2)"
        strokeWidth="1"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 4, delay: 3, ease: "easeInOut" }}
      />
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(34,197,94,0.3)" />
          <stop offset="50%" stopColor="rgba(59,130,246,0.5)" />
          <stop offset="100%" stopColor="rgba(168,85,247,0.3)" />
        </linearGradient>
        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(236,72,153,0.3)" />
          <stop offset="50%" stopColor="rgba(34,197,94,0.5)" />
          <stop offset="100%" stopColor="rgba(59,130,246,0.3)" />
        </linearGradient>
      </defs>
    </motion.svg>
  </>
);

const AboutUsSection = () => {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 overflow-hidden
                 // Beautiful dark gradient with depth
                 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900
                 // Add subtle texture overlay
                 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.1),transparent_50%)]
                 after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.08),transparent_50%)]"
    >
      {/* Background Elements */}
      <BackgroundElements />

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="relative z-10 container mx-auto px-6 flex flex-col items-center gap-24 md:gap-32"
      >
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

We're AI-native. We think in systems. We care about velocity. And we ship with you, not for you.`}
        />
      </motion.div>

      {/* Beautiful bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent pointer-events-none" />
    </section>
  );
};

export default AboutUsSection;
