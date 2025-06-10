// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[rgb(var(--color-surface))] py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <p className="text-[rgb(var(--color-text-secondary))] text-sm order-3 md:order-1 mt-4 md:mt-0">
          © {new Date().getFullYear()} Altryx Codeit. All rights reserved.
        </p>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 order-1 md:order-2">
          <Link to="/privacy-policy" className="text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-primary))] text-sm transition-colors duration-200">
            Privacy Policy
          </Link>
          <Link to="/terms-and-conditions" className="text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-primary))] text-sm transition-colors duration-200">
            Terms & Conditions
          </Link>
        </div>

        <p className="text-[rgb(var(--color-primary))] text-xs mt-4 md:mt-0 order-2 md:order-3"> {/* Changed to --color-primary */}
          Empowering Entrepreneurs to Build and Scale.
        </p>
      </div>
    </footer>
  );
};

export default Footer;