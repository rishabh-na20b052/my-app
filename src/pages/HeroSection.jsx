// src/sections/HeroSection.jsx
import React, { useEffect } from "react";

const HeroSection = ({ onSplineReady }) => {
  useEffect(() => {
    if (onSplineReady) {
      onSplineReady();
    }
  }, [onSplineReady]);

  // Smooth scroll handler for anchor links
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative top-[-90px] min-h-[500px] pt-[150px] flex flex-col justify-center overflow-hidden
                 bg-gradient-to-bl from-[rgb(var(--color-primary))] via-[rgb(var(--color-background))] to-[rgb(var(--color-background))]"
    >
      {/* --- CORRECTED & SIMPLIFIED BACKGROUND --- */}
      {/* This new definition is cleaner and works reliably with the animation config. */}
      <div
        className="absolute inset-0 -z-10
                   bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(var(--color-secondary),0.3),transparent)]
                   animate-hero-gradient"
      />

      {/* Main Content */}
      <div className="relative z-10 flex justify-start items-center h-full w-full py-20 md:py-0 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[700px] w-full text-left p-8 rounded-lg">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-transparent bg-clip-text
                       bg-gradient-to-r from-white to-[rgb(var(--color-primary))]
                       mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            AI-Native Product Development in Weeks
          </h1>
          <p
            className="text-lg md:text-xl text-[rgb(var(--color-text-secondary))] my-8 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            Build Fast, Cost Efficient and Scalable Software systems with a team
            from top global MNCs and IITs.
          </p>
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="flex flex-row flex-wrap items-center justify-start gap-x-6 gap-y-4">
              {/* --- CORRECTED PRIMARY BUTTON WITH CALENDLY LINK --- */}
              <a
                href="https://calendly.com/shoaibmustaque10/appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] group"
              >
                <span
                  className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] 
                               bg-[conic-gradient(from_90deg_at_50%_50%,rgb(var(--color-primary))_0%,rgb(var(--color-secondary))_50%,rgb(var(--color-primary))_100%)]"
                />

                {/* FIX: Added `relative` to this span to ensure it sits on top of the absolute spinning span */}
                <span
                  className="relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full
                             bg-[rgb(var(--color-surface))] px-8 py-3 text-sm font-medium text-[rgb(var(--color-text-main))]
                             transition-colors group-hover:bg-[rgb(var(--color-background))]"
                >
                  Get Consultation
                </span>
              </a>
              {/* Secondary button remains the same */}
              <a
                href="#services"
                onClick={(e) => handleNavClick(e, "#services")}
                className="inline-flex h-12 items-center justify-center font-semibold px-8 py-3 rounded-full text-white
                           bg-white/5 backdrop-blur-sm border border-white/20
                           hover:bg-white/10 hover:border-white/40 transition-all"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
