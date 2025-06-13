// src/sections/ContactSection.jsx
import React, { useEffect, useRef, useState } from 'react';
import VANTA from 'vanta/dist/vanta.globe.min';
import * as THREE from 'three';

const ContactSection = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);
  const [formStatus, setFormStatus] = useState('');

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      // --- VANTA COLORS UPDATED TO MATCH YOUR THEME ---
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
        color: 0x00ADB5,      // Your --color-brand-primary (0, 173, 181)
        color2: 0x393E46,     // Your --color-brand-dark (57, 62, 70)
        size: 1.20,
        backgroundColor: 0x222831, // Your --color-brand-darkest (34, 40, 49)
      });
      setVantaEffect(effect);
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    setFormStatus('Sending...');
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        setFormStatus('Thanks for your message! We will get back to you soon.');
        form.reset();
      } else {
        setFormStatus('Oops! There was a problem submitting your form.');
      }
    } catch (error) {
      setFormStatus('Oops! There was a problem submitting your form.');
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div ref={vantaRef} className="absolute inset-0 w-full h-full z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-[rgb(var(--color-surface)/0.2)] backdrop-blur-lg rounded-2xl shadow-2xl border border-[rgb(var(--color-primary)/0.2)] overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-6 sm:p-8 md:p-10">
              <form
                action="https://formspree.io/f/xzzgzlek" // REMEMBER TO REPLACE THIS
                method="POST"
                onSubmit={handleFormSubmit}
              >
                <div className="grid grid-cols-1 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-[rgb(var(--color-text-secondary))] mb-1">Full Name</label>
                    <input type="text" name="name" id="name" required className="form-input" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-[rgb(var(--color-text-secondary))] mb-1">Email Address</label>
                    <input type="email" name="email" id="email" required className="form-input" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium text-[rgb(var(--color-text-secondary))] mb-1">Phone Number</label>
                    <input type="phone" name="phone" id="phone" required className="form-input" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-xs font-medium text-[rgb(var(--color-text-secondary))] mb-1">Company (Optional)</label>
                    <input type="text" name="company" id="company" className="form-input" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-[rgb(var(--color-text-secondary))] mb-1">Your Idea / Message</label>
                    <textarea name="message" id="message" rows="3" required className="form-input"></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center text-[rgb(var(--color-brand-lightest))] font-semibold py-2.5 px-4 text-sm rounded-md shadow-lg 
                                 transition-all transform hover:-translate-y-1 
                                 bg-gradient-to-r from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))]
                                 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-primary))] focus:ring-offset-2 focus:ring-offset-[rgb(var(--color-surface))]"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
              {formStatus && (
                <p className={`text-center mt-4 text-sm ${formStatus.startsWith('Oops') || formStatus.startsWith('Sending') ? 'text-red-400' : 'text-green-400'}`}>
                  {formStatus}
                </p>
              )}
              <p className="text-xs text-[rgb(var(--color-text-secondary))] text-center mt-6">
                Or email us directly at <a href="mailto:mail@mycodeit.com" className="text-[rgb(var(--color-primary))] hover:underline">mail@mycodeit.com</a>
              </p>
            </div>
            <div className="md:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-center ">
              <h2 className="text-3xl xl:text-4xl font-bold mb-3 text-center md:text-left
                             text-transparent bg-clip-text bg-gradient-to-r from-[rgb(var(--color-text-main))] to-[rgb(var(--color-primary))]">
                Ready to Build Your Dream?
              </h2>
              <p className="text-[rgb(var(--color-text-secondary))] mb-8 text-sm md:text-base text-center md:text-left">
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