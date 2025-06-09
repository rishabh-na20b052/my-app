// src/sections/HeroSection.jsx
import React, { useRef, useEffect } from 'react';

const HeroSection = ({ onSplineReady }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframeElement = iframeRef.current;
    let splineReadyTimer = null;

    if (iframeElement) {
      const handleIframeLoad = () => {
        // console.log("Spline iframe 'load' event fired.");
        // The iframe's initial HTML has loaded.
        // Now, add a small delay to give the Spline scene itself time to initialize.
        splineReadyTimer = setTimeout(() => {
          if (onSplineReady) {
            // console.log("Assuming Spline is ready after additional delay.");
            onSplineReady();
          }
        }, 1500); // Additional delay (e.g., 1.5 seconds). ADJUST AS NEEDED.
      };

      // We can ONLY listen to the 'load' event for cross-origin iframes.
      iframeElement.addEventListener('load', handleIframeLoad);

      return () => {
        if (iframeElement) {
          iframeElement.removeEventListener('load', handleIframeLoad);
        }
        if (splineReadyTimer) {
          clearTimeout(splineReadyTimer);
        }
      };
    }
  }, [onSplineReady]); // Dependency array

  return (
    <section id="hero" className="relative pt-20 pb-20 md:pt-32 md:pb-24 flex flex-col justify-center items-center text-center overflow-hidden min-h-[calc(100vh-4rem)]">
      <div className="spline-container absolute inset-0 w-full h-full z-0 pointer-events-none">
        <iframe
          ref={iframeRef}
          src="https://my.spline.design/claritystream-a72K0KUwFoZV82QBzvu52Kai/"
          width="100%"
          height="100%"
          frameBorder="0"
          className="w-full h-full"
          title="Spline 3D Background"
        ></iframe>
      </div>
      {/* <div className="absolute inset-0 bg-black/30 z-10"></div> */}
      <div className="relative z-20 container mx-auto px-4">
        {/* ... rest of your hero content ... */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 mb-6 animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}>
          AI-Native Product Development for High-Velocity Founders
        </h1>
        <p className="max-w-3xl mx-auto text-base md:text-lg text-text-secondary my-20 animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}>
          We’re an AI-first tech partner for early-stage startups — building Fast, 
          Scalable Software Systems with compounding advantages in Cost, Speed, 
          and Adaptability. Go from idea to launch with an experienced team from top global MNCs and IITs.
        </p>
        <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="flex flex-row flex-wrap justify-center gap-x-8 gap-y-4">
            <a href="#contact" className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-3 text-sm font-medium text-white backdrop-blur-3xl">
                Get Consultation
              </span>
            </a>
            {/* <a
              href="#services"
              className="inline-flex h-12 items-center text-text-secondary hover:text-text-main font-semibold px-8 py-3 rounded-lg text-lg border border-text-secondary/30 hover:border-text-secondary/70 transition-colors opacity-70 hover:opacity-100"
            >
              Learn More
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;