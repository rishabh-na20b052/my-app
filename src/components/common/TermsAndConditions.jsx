// src/pages/TermsAndConditions.jsx
import React from 'react';

const TermsAndConditions = () => {
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-[rgb(var(--color-background))] text-[rgb(var(--color-text-main))] py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-4xl mx-auto bg-[rgb(var(--color-surface))] p-8 md:p-12 rounded-2xl shadow-xl border border-[rgba(var(--color-primary),0.2)]">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[rgb(var(--color-primary))] mb-6">
          📄 Terms & Conditions
        </h1>
        <p className="text-sm md:text-base text-[rgb(var(--color-text-secondary))] mb-8">
          Last Updated: {lastUpdated}
        </p>

        <p className="text-lg md:text-xl leading-relaxed mb-6">
          By using our website and services, you agree to the following terms:
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-[rgb(var(--color-text-main))] mb-4">
          Services
        </h2>
        <p className="text-lg md:text-xl leading-relaxed mb-6">
          We provide product development, technical execution, and GTM services for early-stage startups. Scope and timelines will be defined per engagement.
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-[rgb(var(--color-text-main))] mb-4">
          Payments
        </h2>
        <p className="text-lg md:text-xl leading-relaxed mb-6">
          All payments are processed via Razorpay. Project milestones and payment terms will be detailed in individual contracts or proposals.
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-[rgb(var(--color-text-main))] mb-4">
          Confidentiality
        </h2>
        <p className="text-lg md:text-xl leading-relaxed mb-6">
          We treat all client data, product ideas, and business materials as strictly confidential.
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-[rgb(var(--color-text-main))] mb-4">
          Intellectual Property
        </h2>
        <p className="text-lg md:text-xl leading-relaxed mb-6">
          Clients retain full ownership of their product IP. CodeIt reserves the right to showcase anonymized outcomes for portfolio purposes (with consent).
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-[rgb(var(--color-text-main))] mb-4">
          Liability
        </h2>
        <p className="text-lg md:text-xl leading-relaxed mb-6">
          While we strive for excellence, CodeIt is not liable for direct or indirect damages from use of our website or services, unless outlined in a written agreement.
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-[rgb(var(--color-text-main))] mb-4">
          Changes to Terms
        </h2>
        <p className="text-lg md:text-xl leading-relaxed">
          We may revise these terms as needed. Continued use of our site implies agreement to updated terms.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;