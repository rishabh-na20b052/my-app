import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-surface py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-text-secondary text-sm">
          © {new Date().getFullYear()} Alteryx Codeit. All rights reserved.
        </p>
        <p className="text-purple-600 text-xs mt-1 md:mt-0">
          Empowering Entrepreneurs to Build and Scale.
        </p>
        {/* Add social media links or other footer content here */}
      </div>
    </footer>
  );
};

export default Footer;