import React, { useEffect, useRef, useState } from 'react';
import VANTA from 'vanta/dist/vanta.globe.min';
import * as THREE from 'three';

const ContactSection = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      const effect = VANTA({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x3b82f6,
        color2: 0x8b5cf6,
        size: 1.20,
        backgroundColor: 0x0a0a0a,
      });
      setVantaEffect(effect);
    }
    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
        setVantaEffect(null);
      }
    };
  }, [vantaEffect]);

  return (
    <section
      id="contact"
      className="relative py-16 md:py-24 min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        ref={vantaRef}
        className="absolute inset-0 w-full h-full z-0"
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* This main div provides the overall blurred box effect */}
        <div className="max-w-4xl mx-auto bg-surface/40 backdrop-blur-md rounded-xl shadow-2xl border border-white/10 overflow-hidden">
          <div className="md:flex">

            {/* Left Column: Form */}
            <div className="md:w-1/2 p-6 sm:p-8 md:p-10 order-2 md:order-1">
              {/* Form content as before */}
              <form action="YOUR_FORM_ENDPOINT" method="POST">
                <div className="grid grid-cols-1 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-text-secondary mb-1">Full Name</label>
                    <input
                      type="text" name="name" id="name" required
                      className="block w-full bg-background/80 border-surface placeholder-text-secondary/50 text-text-main text-sm rounded-md py-2 px-3 shadow-sm focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-text-secondary mb-1">Email Address</label>
                    <input
                      type="email" name="email" id="email" required
                      className="block w-full bg-background/80 border-surface placeholder-text-secondary/50 text-text-main text-sm rounded-md py-2 px-3 shadow-sm focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-xs font-medium text-text-secondary mb-1">Company (Optional)</label>
                    <input
                      type="text" name="company" id="company"
                      className="block w-full bg-background/80 border-surface placeholder-text-secondary/50 text-text-main text-sm rounded-md py-2 px-3 shadow-sm focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-text-secondary mb-1">Your Idea / Message</label>
                    <textarea
                      name="message" id="message" rows="3" required
                      className="block w-full bg-background/80 border-surface placeholder-text-secondary/50 text-text-main text-sm rounded-md py-2 px-3 shadow-sm focus:border-primary focus:ring-1 focus:ring-primary"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center bg-primary hover:bg-primary-hover text-white font-semibold py-2.5 px-4 text-sm rounded-md shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
              <p className="text-xs text-text-secondary text-center mt-6">
                Or email us directly at <a href="mailto:mail@mycodeit.com" className="text-primary hover:underline">mailmycodeit.com</a> {/* UPDATED EMAIL */}
              </p>
            </div>

            {/* Right Column: Text */}
            {/* This column now also gets padding and its content will be visually "inside" the main blurred box */}
            <div className="md:w-1/2 p-6 sm:p-8 md:p-10 order-1 md:order-2 flex flex-col justify-center">
              {/* No separate background needed here if the parent `max-w-4xl` div handles the blur */}
              <h2 className="text-3xl xl:text-4xl font-bold text-text-main mb-3 text-center md:text-left">
                Ready to Build Your Dream?
              </h2>
              <p className="text-text-secondary mb-8 text-sm md:text-base text-center md:text-left">
                Let's discuss how CodeIt can help you launch and scale your vision from idea to reality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;