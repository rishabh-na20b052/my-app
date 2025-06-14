// src/pages/PrivacyPolicy.jsx
import React from "react";

const RefundPolicies = () => {
  const lastUpdated = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-[rgb(var(--color-background))] text-[rgb(var(--color-text-main))] py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-4xl mx-auto bg-[rgb(var(--color-surface))] p-8 md:p-12 rounded-2xl shadow-xl border border-[rgba(var(--color-primary),0.2)]">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[rgb(var(--color-primary))] mb-6">
          📄 Refund Policies
        </h1>
        <p className="text-sm md:text-base text-[rgb(var(--color-text-secondary))] mb-8">
          Last Updated: {lastUpdated}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[rgb(var(--color-text-main))] mb-4">
          General
        </h2>
        <p className="text-lg md:text-xl leading-relaxed mb-6">
          Our any subscription plans for Web development & tech support or SEO
          offered by us requires a twelve-month warranty & as well as monthly
          and be refunded within the 7 days of receiving of subscription amount.
          Therefore the refund timeline is 1 to 7 working days. However, subject
          to the pure discretion of company management of the virtues of any
          specific case, the amount of payment can be refunded if any case you
          are not satisfied with our service, and we will also do our best
          efforts to resolve the customer’s problem as soon as possible. And if
          you are still not satisfied with our service, then we will provide a
          refund policy that will be applicable under following circumstances.
          We follow 7 days money refund policy under the following terms and
          conditions. If claim submitted within 7 calendar days of subscription
          or under trial or as per signed terms & conditions, then 100% of plan
          price will be refunded. If claim submitted within 7 calendar days of
          subscription or under trial or as per signed terms & conditions, then
          100% of plan price will be refunded.
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-[rgb(var(--color-text-main))] mb-4">
          Refunds can be done, either of the following circumstances:
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-base md:text-lg leading-relaxed text-white">
          <li>
            When you have all the prerequisites which were required to resolve
            the issues and that was not done or resolved even though your
            account was active.
          </li>
          <li>
            The issue or submission is out of scope for the particular plan or
            signed contract.
          </li>
          <li>
            After the issue was last worked upon by Net Support Service, 7 days
            have not passed.
          </li>
          <li>
            There has not been a closed ticket or resolved issue in the past for
            unlimited plans.
          </li>
        </ul>

        <h2 className="text-3xl md:text-4xl font-bold text-[rgb(var(--color-text-main))] mb-4">
          API / Software / DATA
        </h2>
        <p className="text-lg md:text-xl leading-relaxed">
          Codeit is not responsible for any kind of data breach-loss-corrupt. We
          strongly recommend to keep data backup and its customers
          responsibility to always keep and maintain the backup of data and our
          disaster recovery plan.The prices are indicated in rupees, excluding
          the shipping and processing of your order. The price of items can be
          changed at any time. However, the price applied to an order will be
          the one stated at the time of the order.
        </p>
      </div>
    </div>
  );
};

export default RefundPolicies;
