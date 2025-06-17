// src/components/Footer.jsx
import React, { useState } from "react";
// Import your modal content components
import PrivacyPolicy from "../common/PrivacyPolicy";
import TermsAndConditions from "../common/TermsAndConditions";
import RefundPolicy from "../common/RefundPolicies";

const Footer = () => {
  const [openModal, setOpenModal] = useState(null);

  const modalComponents = {
    privacy: PrivacyPolicy,
    terms: TermsAndConditions,
    refund: RefundPolicy,
  };

  const Modal = ({ type, onClose }) => {
    const Component = modalComponents[type];
    if (!Component) return null;
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
        <div className="relative w-full h-full flex items-center justify-center">
          <button
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={onClose}
            aria-label="Close"
          >
            &times;
          </button>
          <div className="bg-surface w-full h-full mx-auto p-8 rounded-lg overflow-auto hide-scrollbar">
            <Component />
          </div>
        </div>
      </div>
    );
  };

  return (
    <footer className="bg-[rgb(var(--color-surface))] py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <p className="text-[rgb(var(--color-text-secondary))] text-sm order-3 md:order-1 mt-4 md:mt-0">
          © {new Date().getFullYear()} Altix Codeit. All rights reserved.
        </p>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 order-1 md:order-2">
          <button
            className="text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-primary))] text-sm transition-colors duration-200"
            onClick={() => setOpenModal("privacy")}
          >
            Privacy Policy
          </button>
          <button
            className="text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-primary))] text-sm transition-colors duration-200"
            onClick={() => setOpenModal("terms")}
          >
            Terms & Conditions
          </button>
          <button
            className="text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-primary))] text-sm transition-colors duration-200"
            onClick={() => setOpenModal("refund")}
          >
            Refund Policy
          </button>
        </div>

        <p className="text-[rgb(var(--color-primary))] text-xs mt-4 md:mt-0 order-2 md:order-3">
          {" "}
          {/* Changed to --color-primary */}
          Empowering Entrepreneurs to Build and Scale.
        </p>
      </div>
      {openModal && <Modal type={openModal} onClose={() => setOpenModal(null)} />}
    </footer>
  );
};

export default Footer;
