import React, { useRef, useEffect, useState } from "react";
import "./Herosection.css";

const HeroSection = ({ onSplineReady }) => {
  const iframeRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const iframeElement = iframeRef.current;
    let splineReadyTimer = null;

    if (iframeElement) {
      const handleIframeLoad = () => {
        splineReadyTimer = setTimeout(() => {
          setIsLoaded(true);
          if (onSplineReady) {
            onSplineReady();
          }
        }, 1500);
      };

      iframeElement.addEventListener("load", handleIframeLoad);

      return () => {
        if (iframeElement) {
          iframeElement.removeEventListener("load", handleIframeLoad);
        }
        if (splineReadyTimer) {
          clearTimeout(splineReadyTimer);
        }
      };
    }
  }, [onSplineReady]);

  return (
    <section id="hero" className="hero-section">
      {/* Clean Animated Background */}
      <div className="hero-background">
        {/* Main gradient background */}
        <div className="main-gradient"></div>

        {/* Animated overlay gradients */}
        <div className="overlay-gradient-1"></div>
        <div className="overlay-gradient-2"></div>

        {/* Subtle mesh gradient overlay */}
        <div className="mesh-gradient">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="blob blob-3"></div>
        </div>
      </div>

      {/* Optional Spline 3D Background - very subtle */}
      <div className="spline-container">
        <iframe
          ref={iframeRef}
          src="https://my.spline.design/claritystream-a72K0KUwFoZV82QBzvu52Kai/"
          width="100%"
          height="100%"
          frameBorder="0"
          className="spline-iframe"
          title="Spline 3D Background"
        />
      </div>

      {/* Content */}
      <div className="hero-content">
        {/* Main Heading */}
        <h1 className="hero-title">
          <span className="title-line-1">
            <span className="title-gradient-1">From Idea to IPO</span>
          </span>
          <br />
          <span className="title-line-2">
            <span className="title-gradient-2">We're With You.</span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle">
          Alteryx Codeit empowers budding entrepreneurs to transform ideas into
          large-scale businesses. Everything you need to succeed, from tech
          infrastructure to growth strategy and investor access.
        </p>

        {/* CTA Buttons */}
        <div className="cta-container">
          <div className="button-group">
            {/* Primary CTA */}
            <a href="#contact" className="btn-primary">
              <span className="btn-primary-text">Get Consultation</span>
              <div className="btn-primary-overlay"></div>
            </a>

            {/* Secondary CTA */}
            <a href="#services" className="btn-secondary">
              <span className="btn-secondary-text">Learn More</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
