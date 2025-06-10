// src/sections/ServicesSection.jsx
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Cpu, Rocket, Handshake } from 'lucide-react';

const services = [
  {
    icon: <Cpu size={32} strokeWidth={1.75} />,
    title: "AI-Led Software Development",
    description: "We build full-stack products, modular systems, and internal tools — fast, cost-efficient, and built to scale."
  },
  {
    icon: <Rocket size={32} strokeWidth={1.75} />,
    title: "Digital-First Growth",
    description: "AI-enabled Go To Market support and Revenue Activation optimized for conversion and efficiency from day one."
  },
  {
    icon: <Handshake size={32} strokeWidth={1.75} />,
    title: "Strategic Execution",
    description: "We operate like a co-founder with a playbook — fast iterations, tight feedback loops, and warm intros to our networks."
  }
];

// --- Card components remain the same ---

const DesktopServiceCard = ({ icon, title, description }) => (
  <div className="absolute inset-0 p-8 rounded-2xl bg-[rgb(var(--color-surface)/0.6)] backdrop-blur-lg ring-1 ring-inset ring-white/10 shadow-2xl shadow-black/40 flex items-center gap-6">
    <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-[rgba(var(--color-primary),0.1)] text-[rgb(var(--color-primary))]">
      {icon}
    </div>
    <div>
      <h3 className="text-xl font-semibold text-[rgb(var(--color-text-main))]">{title}</h3>
      <p className="text-base text-[rgb(var(--color-text-secondary))] leading-relaxed">{description}</p>
    </div>
  </div>
);

const MobileServiceCard = ({ icon, title, description }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
    }}
    className="p-6 rounded-2xl flex items-start gap-4 h-auto bg-[rgb(var(--color-surface))] ring-1 ring-white/10"
  >
    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full mt-1 bg-[rgba(var(--color-primary),0.1)] text-[rgb(var(--color-primary))]">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-semibold text-[rgb(var(--color-text-main))]">{title}</h3>
      <p className="text-sm text-[rgb(var(--color-text-secondary))] leading-relaxed">{description}</p>
    </div>
  </motion.div>
);


const ServicesSection = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // These animations are ONLY for the desktop view
  const textOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.2], [40, 0]);
  const cardHeight = 180, gap = 24;
  const card2Y = useTransform(scrollYProgress, [0.3, 0.6], [0, cardHeight + gap]);
  const card2Scale = useTransform(scrollYProgress, [0.3, 0.6], [0.95, 1]);
  const card2Opacity = useTransform(scrollYProgress, [0.3, 0.6], [0.5, 1]);
  const card3Y = useTransform(scrollYProgress, [0.4, 0.7], [0, (cardHeight + gap) * 2]);
  const card3Scale = useTransform(scrollYProgress, [0.4, 0.7], [0.9, 1]);
  const card3Opacity = useTransform(scrollYProgress, [0.4, 0.7], [0, 1]);

  return (
    <div id="services" className="bg-[rgb(var(--color-background))]">
      {/* --- MOBILE LAYOUT: Simple, vertical, and always visible on small screens --- */}
      <section className="block md:hidden py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.h2
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-3xl font-bold text-center text-[rgb(var(--color-text-main))] mb-4"
            >
              A Partnership to Build, Launch, and Scale.
            </motion.h2>
            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-base text-center text-[rgb(var(--color-text-secondary))] max-w-lg mx-auto mb-16"
            >
              We offer a spectrum of services designed to transform your vision into a market-ready product.
            </motion.p>
            
            <div className="space-y-6">
              {services.map((service, index) => (
                <MobileServiceCard key={index} {...service} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- DESKTOP LAYOUT: The complex sticky animation, hidden on small screens --- */}
      <section ref={targetRef} className="hidden md:block h-[200vh] relative">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <GradientSpotlight />
          <div className="container mx-auto px-6 h-full grid grid-cols-2 items-center gap-16">
            <motion.div style={{ opacity: textOpacity, y: textY }}>
              <h2 className="text-4xl md:text-5xl font-bold text-[rgb(var(--color-text-main))] mb-6">
                A Partnership to Build, Launch, and Scale.
              </h2>
              <p className="text-lg text-[rgb(var(--color-text-secondary))] max-w-lg">
                We offer a spectrum of services designed to transform your vision into a market-ready product. From foundational engineering to strategic growth, we are your dedicated execution partners.
              </p>
            </motion.div>
            <div className="relative h-[600px] w-full max-w-md mx-auto">
              <motion.div style={{ y: card3Y, scale: card3Scale, opacity: card3Opacity }} className="absolute w-full h-[180px]">
                <DesktopServiceCard {...services[2]} />
              </motion.div>
              <motion.div style={{ y: card2Y, scale: card2Scale, opacity: card2Opacity }} className="absolute w-full h-[180px]">
                <DesktopServiceCard {...services[1]} />
              </motion.div>
              <motion.div className="absolute w-full h-[180px]">
                <DesktopServiceCard {...services[0]} />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const GradientSpotlight = () => (
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(var(--color-secondary),0.3),rgba(255,255,255,0))] pointer-events-none" />
);

export default ServicesSection;