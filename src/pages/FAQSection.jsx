// src/sections/FAQSection.jsx
import React from 'react';
import FAQItem from '../components/common/FAQItem'; // Adjust path

const faqsData = [
  {
    question: "How fast can you deliver?",
    answer: "Most projects are scoped and shipped within 4–8 weeks, depending on complexity. We prioritize rapid iteration and feedback to ensure we're building the right thing efficiently."
  },
  {
    question: "Do you work with bootstrapped startups?",
    answer: "Yes. We understand the unique challenges and constraints of bootstrapped ventures. We adapt our execution style to your pace, budget, and growth expectations, focusing on delivering maximum value."
  },
  {
    question: "Do you offer post-launch support?",
    answer: "We do. Our partnership doesn't end at launch. We offer various post-launch support packages, from maintenance and bug fixes to ongoing feature development and scaling assistance."
  },
  {
    question: "Can you help us with pricing, positioning, or market entry?",
    answer: "Absolutely. With our deep startup experience, particularly from an IITian background, we regularly advise founders on crucial GTM strategies including pricing models, market positioning, and effective market entry tactics."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 md:py-32 bg-[rgb(var(--color-background))] relative overflow-hidden">
      {/* Subtle background glow for depth */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(var(--color-secondary),0.2),rgba(255,255,255,0))] pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:gap-12 lg:gap-24 items-start">

          {/* --- CORRECTED Left Column: Heading --- */}
          {/* The sticky behavior is restored here for medium screens and up. */}
          <div className="md:w-1/3 lg:w-1/4 mb-12 md:mb-0 md:sticky md:top-24">
            <h2 className="text-4xl sm:text-5xl font-bold text-[rgb(var(--color-text-main))] leading-tight mb-4">
              Frequently Asked Questions
            </h2>
            {/* Decorative underline */}
            <div className="h-1 w-24 bg-gradient-to-r from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))]" />
          </div>

          {/* Right Column: Q&A List */}
          <div className="w-full md:w-2/3">
            <div className="space-y-0">
              {faqsData.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;