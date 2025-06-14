// src/components/layout/Navbar.jsx
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "How we Work", href: "#how-we" },
    { name: "About", href: "#about" },
    { name: "FAQs", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href === "#" ? "hero" : href.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      }
    }
  };

  // ✅ Updated Logo component using SVG with Capital C and I
  const CodeItLogo = () => (
    <svg
      width="120"
      height="32"
      viewBox="0 0 120 32"
      className="flex-shrink-0 hover:scale-105 transition-transform duration-200"
    >
      <text
        x="0"
        y="22"
        fontSize="18"
        fontWeight="bold"
        fontFamily="'Segoe UI', Arial, sans-serif"
        fill="rgb(var(--color-text-main))"
      >
        Code
      </text>
      <text
        x="45"
        y="22"
        fontSize="18"
        fontWeight="bold"
        fontFamily="'Segoe UI', Arial, sans-serif"
        fill="#3498db"
      >
        It
      </text>
    </svg>
  );

  return (
    <div className="lg:w-[900px] mx-auto bg-[rgb(var(--color-surface))/0.7] backdrop-blur-md sticky md:top-5 z-50 shadow-xl shadow-black/20 rounded-xl mt-5">
      <nav className="border border-[rgb(var(--color-text-main))/0.1] rounded-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a
                href="#"
                className="flex-shrink-0 flex items-center"
                onClick={(e) => handleNavClick(e, "#")}
              >
                <CodeItLogo />
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-text-main))] px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-[rgb(var(--color-surface))] inline-flex items-center justify-center p-2 rounded-md text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-text-main))] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[rgb(var(--color-background))] focus:ring-[rgb(var(--color-primary))]"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-[rgb(var(--color-text-secondary))] hover:bg-[rgb(var(--color-surface))/0.8] hover:text-[rgb(var(--color-text-main))] block px-3 py-2 rounded-md text-base font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
