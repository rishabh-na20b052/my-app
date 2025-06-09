// src/sections/WhyUsSection.jsx

import React, { useEffect, useRef } from 'react'; // Keep useEffect and useRef if the canvas is intended to be used
// Import icons from lucide-react - NEW ICONS CHOSEN
import { Lightbulb, Hammer, Rocket, RefreshCw } from 'lucide-react'; // Lightbulb, Tool, Rocket (re-use), RefreshCw

// IconPlaceholder and its assignments are no longer needed
// (These were already commented out in the previous version, ensuring they are gone)

const WhyUsSection = () => {
  // If the canvas background is still meant to be here, keep the canvasRef and useEffect
  // Otherwise, remove them to simplify the component.
  // Assuming you still want the canvas background:
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let time = 0;
    let animationId;
    const canvasBackgroundColor = 'black'; // Or your theme's dark background color

    let waveData = Array(8).fill(0).map(() => ({
      value: Math.random() * 0.5 + 0.1,
      targetValue: Math.random() * 0.5 + 0.1,
      speed: Math.random() * 0.02 + 0.01
    }));

    function resizeCanvas() {
      if (canvas && canvas.parentElement) {
        canvas.width = canvas.parentElement.offsetWidth;
        canvas.height = canvas.parentElement.offsetHeight;
      } else {
        canvas.width = 0;
        canvas.height = 0;
      }
    }

    function updateWaveData() {
      waveData.forEach(data => {
        if (Math.random() < 0.01) {
          data.targetValue = Math.random() * 0.7 + 0.1;
        }
        const diff = data.targetValue - data.value;
        data.value += diff * data.speed;
      });
    }

    function draw() {
      ctx.fillStyle = canvasBackgroundColor; // Set the background for this section's canvas
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < 8; i++) {
        const freq = waveData[i].value * 7.0;
        ctx.beginPath();

        for (let x = 0; x < canvas.width; x += 1) {
          const normalizedX = (x / canvas.width) * 2 - 1;
          let px = normalizedX + i * 0.04 + freq * 0.03;
          let py = Math.sin(px * 10 + time) * Math.cos(px * 2) * freq * 0.1 * ((i + 1) / 8);
          const canvasY = (py + 1) * canvas.height / 2;

          if (x === 0) {
            ctx.moveTo(x, canvasY);
          } else {
            ctx.lineTo(x, canvasY);
          }
        }

        const intensity = Math.min(1, freq * 0.3);
        const r = 59 + intensity * 100;
        const g = 130 + intensity * 80;
        const b = 246 + intensity * 0;

        ctx.lineWidth = 1 + (i * 0.3);
        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, 0.7)`;
        ctx.shadowColor = `rgba(${r}, ${g}, ${b}, 0.5)`;
        ctx.shadowBlur = 5 + i;
        ctx.stroke();
        ctx.shadowBlur = 0;
      }
    }

    function animate() {
      time += 0.02;
      updateWaveData();
      draw();
      animationId = requestAnimationFrame(animate);
    }

    resizeCanvas(); // Initial size
    animate();      // Start animation
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []); // End of useEffect for canvas background

  return (
    <section
      id="why-us"
      className="py-16 md:py-24 min-h-screen flex flex-col justify-center relative overflow-hidden"
    >
      <canvas
        id="visualizer"
        // ref={canvasRef} {/* Re-added ref */}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      ></canvas>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-text-main mb-16">
          How We Work
        </h2> {/* Changed heading to "How We Work" */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 text-center">
          {/* Card 1: Discovery & Planning */}
          <div
            className="why-us-floating-card animate-float p-6"
            style={{ animationDelay: '0s' }}
          >
            <div className="flex justify-center mb-4 text-primary">
              <Lightbulb size={40} strokeWidth={1.5} /> {/* Icon for Discovery & Planning */}
            </div>
            <h3 className="text-xl font-semibold text-text-main mb-2">Discovery & Planning</h3>
            <p className="text-text-secondary text-sm">Align on goals, audience, timelines, and scope. Prioritize what's most critical.</p>
          </div>

          {/* Card 2: Build */}
          <div
            className="why-us-floating-card animate-float p-6"
            style={{ animationDelay: '-1.5s' }}
          >
            <div className="flex justify-center mb-4 text-primary">
              <Hammer size={40} strokeWidth={1.5} /> {/* Icon for Build */}
            </div>
            <h3 className="text-xl font-semibold text-text-main mb-2">Build</h3>
            <p className="text-text-secondary text-sm">Execute on core product and GTM modules. Transparent progress and agile sprints.</p>
          </div>

          {/* Card 3: Go-to-Market */}
          <div
            className="why-us-floating-card animate-float p-6"
            style={{ animationDelay: '-3.0s' }}
          >
            <div className="flex justify-center mb-4 text-primary">
              <Rocket size={40} strokeWidth={1.5} /> {/* Icon for Go-to-Market */}
            </div>
            <h3 className="text-xl font-semibold text-text-main mb-2">Go-to-Market</h3>
            <p className="text-text-secondary text-sm">Activate your outreach, content, funnel, and onboarding to start customer conversations.</p>
          </div>

          {/* Card 4: Iterate & Optimize */}
          <div
            className="why-us-floating-card animate-float p-6"
            style={{ animationDelay: '-4.5s' }}
          >
            <div className="flex justify-center mb-4 text-primary">
              <RefreshCw size={40} strokeWidth={1.5} /> {/* Icon for Iterate & Optimize */}
            </div>
            <h3 className="text-xl font-semibold text-text-main mb-2">Iterate & Optimize</h3>
            <p className="text-text-secondary text-sm">Post-launch refinement based on user behavior, market feedback, and performance signals.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;