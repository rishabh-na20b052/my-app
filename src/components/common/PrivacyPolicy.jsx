// src/pages/PrivacyPolicy.jsx
import React from "react";

const PrivacyPolicy = () => {
  const lastUpdated = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen  text-[rgb(var(--color-text-main))] py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-4xl mx-auto bg-[rgb(var(--color-surface))] p-8 md:p-12 rounded-2xl shadow-xl border border-[rgba(var(--color-primary),0.2)]">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[rgb(var(--color-primary))] mb-6">
          📄 Privacy Policy
        </h1>
        <p className="text-sm md:text-base text-[rgb(var(--color-text-secondary))] mb-8">
          Last Updated: {lastUpdated}
        </p>

        <p className="text-lg md:text-xl leading-relaxed mb-6">
          We at Altix CodeIt Technologies respect your privacy and are committed
          to protecting the information you share with us.
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-[rgb(var(--color-text-main))] mb-4">
          Information We Collect
        </h2>
        <ul className="list-disc list-inside text-lg md:text-xl leading-relaxed mb-6 pl-4">
          <li>Basic contact information you provide (email, name, etc.)</li>
          <li>Usage data collected via cookies or analytics tools</li>
        </ul>

        <h2 className="text-3xl md:text-4xl font-bold text-[rgb(var(--color-text-main))] mb-4">
          How We Use It
        </h2>
        <ul className="list-disc list-inside text-lg md:text-xl leading-relaxed mb-6 pl-4">
          <li>To communicate with you</li>
          <li>To improve our website and services</li>
          <li>To comply with applicable laws</li>
        </ul>

        <h2 className="text-3xl md:text-4xl font-bold text-[rgb(var(--color-text-main))] mb-4">
          Sharing Your Data
        </h2>
        <p className="text-lg md:text-xl leading-relaxed mb-6">
          We do not sell or share your data with third parties, except to
          service providers necessary for operations, and only under secure
          agreements.
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-[rgb(var(--color-text-main))] mb-4">
          Data Security
        </h2>
        <p className="text-lg md:text-xl leading-relaxed mb-6">
          We implement best practices to protect your data against unauthorized
          access or misuse.
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-[rgb(var(--color-text-main))] mb-4">
          Your Rights
        </h2>
        <p className="text-lg md:text-xl leading-relaxed mb-6">
          You may request to access, modify, or delete your data by contacting
          us at{" "}
          <a
            href="mailto:hello@codeit.tech"
            className="text-[rgb(var(--color-primary))] hover:underline"
          >
            mail@mycodeit.com
          </a>
          .
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-[rgb(var(--color-text-main))] mb-4">
          Payment Information
        </h2>
        <p className="text-lg md:text-xl leading-relaxed">
          All payment transactions are handled securely by Razorpay. We do not
          store or process payment card details on our servers.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
