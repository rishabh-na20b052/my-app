// src/components/common/FAQItem.jsx
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // The border color now changes when the item is open for a nice visual cue
    <div className={`border-b py-6 transition-colors duration-300 ${isOpen ? 'border-[rgb(var(--color-primary)/0.5)]' : 'border-[rgb(var(--color-surface))]'}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-start justify-between w-full text-left focus:outline-none group"
        aria-expanded={isOpen}
      >
        {/* The question text color changes when open or on hover */}
        <h3 className={`text-lg md:text-xl font-medium pr-4 transition-colors duration-300 ${isOpen ? 'text-[rgb(var(--color-primary))]' : 'text-[rgb(var(--color-text-main))] group-hover:text-[rgb(var(--color-primary)/0.8)]'}`}>
          {question}
        </h3>
        <span className="mt-1 flex-shrink-0">
          {/* The icon itself uses the primary color */}
          {isOpen ? (
            <Minus className="w-5 h-5 text-[rgb(var(--color-primary))]" />
          ) : (
            <Plus className="w-5 h-5 text-[rgb(var(--color-text-main))] group-hover:text-[rgb(var(--color-primary))] transition-colors" />
          )}
        </span>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-[rgb(var(--color-text-secondary))] pl-0 pr-9 ${
            isOpen ? 'grid-rows-[1fr] opacity-100 pt-4' : 'grid-rows-[0fr] opacity-0'
        }`}
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