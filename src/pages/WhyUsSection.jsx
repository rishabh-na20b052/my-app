// src/sections/WhyUsSection.jsx

import React, { useEffect, useRef } from 'react';
// Import icons from lucide-react
import { Award, Zap, Users, BadgePercent } from 'lucide-react'; // UPDATED IMPORTS

// IconPlaceholder and its assignments are no longer needed
// const IconPlaceholder = ...
// const BriefcaseIcon = IconPlaceholder;
// const ZapIcon = IconPlaceholder;
// const UsersIcon = IconPlaceholder;
// const BarChart2Icon = IconPlaceholder;

const WhyUsSection = () => {
  
  // const canvasRef = useRef(null);

  // useEffect(() => {
  //   const canvas = canvasRef.current;
  //   if (!canvas) return;

  //   const ctx = canvas.getContext('2d');
  //   let time = 0;
  //   let animationId;
  //   const canvasBackgroundColor = 'black';

  //   let waveData = Array(8).fill(0).map(() => ({
  //     value: Math.random() * 0.5 + 0.1,
  //     targetValue: Math.random() * 0.5 + 0.1,
  //     speed: Math.random() * 0.02 + 0.01
  //   }));

  //   function resizeCanvas() {
  //     if (canvas && canvas.parentElement) {
  //       canvas.width = canvas.parentElement.offsetWidth;
  //       canvas.height = canvas.parentElement.offsetHeight;
  //     } else {
  //       canvas.width = 0;
  //       canvas.height = 0;
  //     }
  //   }

  //   function updateWaveData() {
  //     waveData.forEach(data => {
  //       if (Math.random() < 0.01) {
  //         data.targetValue = Math.random() * 0.7 + 0.1;
  //       }
  //       const diff = data.targetValue - data.value;
  //       data.value += diff * data.speed;
  //     });
  //   }

  //   function draw() {
  //     ctx.fillStyle = canvasBackgroundColor;
  //     ctx.fillRect(0, 0, canvas.width, canvas.height);

  //     for (let i = 0; i < 8; i++) {
  //       const freq = waveData[i].value * 7.0;
  //       ctx.beginPath();

  //       for (let x = 0; x < canvas.width; x += 1) {
  //         const normalizedX = (x / canvas.width) * 2 - 1;
  //         let px = normalizedX + i * 0.04 + freq * 0.03;
  //         let py = Math.sin(px * 10 + time) * Math.cos(px * 2) * freq * 0.1 * ((i + 1) / 8);
  //         const canvasY = (py + 1) * canvas.height / 2;

  //         if (x === 0) {
  //           ctx.moveTo(x, canvasY);
  //         } else {
  //           ctx.lineTo(x, canvasY);
  //         }
  //       }

  //       const intensity = Math.min(1, freq * 0.3);
  //       const r = 59 + intensity * 100;
  //       const g = 130 + intensity * 80;
  //       const b = 246 + intensity * 0;

  //       ctx.lineWidth = 1 + (i * 0.3);
  //       ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, 0.7)`;
  //       ctx.shadowColor = `rgba(${r}, ${g}, ${b}, 0.5)`;
  //       ctx.shadowBlur = 5 + i;
  //       ctx.stroke();
  //       ctx.shadowBlur = 0;
  //     }
  //   }

  //   function animate() {
  //     time += 0.02;
  //     updateWaveData();
  //     draw();
  //     animationId = requestAnimationFrame(animate);
  //   }

  //   resizeCanvas();
  //   animate();
  //   window.addEventListener('resize', resizeCanvas);

  //   return () => {
  //     window.removeEventListener('resize', resizeCanvas);
  //     cancelAnimationFrame(animationId);
  //   };
  // }, []);

  return (
    <section
      id="why-us"
      className="py-16 md:py-24 min-h-screen flex flex-col justify-center relative overflow-hidden"
    >
      <canvas
        id="visualizer"
        // ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      ></canvas>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-text-main mb-16">
          Why Partner With CodeIt?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 text-center">
          <div
            className="why-us-floating-card animate-float p-6"
            style={{ animationDelay: '0s' }}
          >
            <div className="flex justify-center mb-4 text-primary"> {/* Moved text-primary here */}
              {/* Use actual Award icon */}
              <Award size={40} strokeWidth={1.5} /> {/* size is in pixels, strokeWidth for line thickness */}
            </div>
            <h3 className="text-xl font-semibold text-text-main mb-2">IITian Expertise</h3>
            <p className="text-text-secondary text-sm">Built by IITians with proven startup success.</p>
          </div>
          <div
            className="why-us-floating-card animate-float p-6"
            style={{ animationDelay: '-1.5s' }}
          >
            <div className="flex justify-center mb-4 text-primary">
              {/* Use actual Zap icon */}
              <Zap size={40} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-semibold text-text-main mb-2">Fast MVP Delivery</h3>
            <p className="text-text-secondary text-sm">Launch in weeks, not months.</p>
          </div>
          <div
            className="why-us-floating-card animate-float p-6"
            style={{ animationDelay: '-3.0s' }}
          >
            <div className="flex justify-center mb-4 text-primary">
              {/* Use actual Users icon */}
              <Users size={40} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-semibold text-text-main mb-2">Complete GTM Support</h3>
            <p className="text-text-secondary text-sm">From first user to first million.</p>
          </div>
          <div
            className="why-us-floating-card animate-float p-6"
            style={{ animationDelay: '-4.5s' }}
          >
            <div className="flex justify-center mb-4 text-primary">
              {/* Use actual BadgePercent icon */}
              <BadgePercent size={40} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-semibold text-text-main mb-2">Best-in-Class Pricing</h3>
            <p className="text-text-secondary text-sm">AI-led development for cost efficiency.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;