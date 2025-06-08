// src/components/common/FAQItem.jsx
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react'; // Using Lucide React icons

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-surface/30 py-6"> {/* Slightly more subtle border */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-start w-full text-left focus:outline-none group" // group for hover effect on icon
        aria-expanded={isOpen}
      >
        <span className="mr-4 mt-1 flex-shrink-0"> {/* Container for the icon */}
          {isOpen ? (
            <Minus className="w-5 h-5 text-primary" /> // Use your theme's primary color
          ) : (
            <Plus className="w-5 h-5 text-primary group-hover:text-purple-400 transition-colors" /> // Or a specific accent like purple
          )}
        </span>
        <h3 className="text-lg md:text-xl font-medium text-text-main group-hover:text-primary/80 transition-colors">
          {question}
        </h3>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-text-secondary/90 pl-9 ${
            isOpen ? 'grid-rows-[1fr] opacity-100 pt-3 pb-1' : 'grid-rows-[0fr] opacity-0 pt-0 pb-0'}`}
      >
        <div className="overflow-hidden">
            <p className="leading-relaxed">
                {answer}
            </p>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;