// src/sections/FAQSection.jsx
import React from 'react';
import FAQItem from '../components/common/FAQItem'; // Adjust path

const faqsData = [ // Renamed from faqs to faqsData to avoid conflict with component name
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
    <section id="faq" className="py-16 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:gap-12 lg:gap-24 items-start"> {/* items-start for desktop alignment */}

          {/* Left Column: Heading */}
          <div className="md:w-1/3 lg:w-1/4 mb-12 md:mb-0 md:sticky md:top-24"> {/* Sticky for desktop */}
            {/* Removed emoji from here as Clueso doesn't use it in the big heading */}
            <h2 className="text-4xl sm:text-5xl font-bold text-text-main leading-tight">
              Frequently Asked Questions
            </h2>
          </div>

          {/* Right Column: Q&A List */}
          <div className="w-full md:w-2/3 ">
            {/* Mobile-only heading (optional, if you want a smaller centered heading on mobile) */}
            

            <div className="space-y-0">
              {faqsData.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
            {/* Mobile-only paragraph (optional) */}
            <p className="mt-8 text-center text-text-secondary md:hidden">
              Can't find the answer you're looking for? <a href="#contact" className="text-primary hover:underline">Reach out to our team.</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;