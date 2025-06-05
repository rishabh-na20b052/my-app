// src/components/visuals/SonarGridBackground.jsx
import React, { useEffect, useRef } from 'react';

const SonarGridBackground = () => {
  const containerRef = useRef(null);
  const dotsRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef(null);
  const startTimestampRef = useRef(null);

  // --- CONFIGURATION ---
  const baseGridUnits = 36; // How many dots across the conceptual grid (e.g., 36x36)
  const dotSize = 3;      // INCREASED DOT SIZE - Adjust as needed (e.g., 2, 3, 4)
  // --- END CONFIGURATION ---

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let dots = []; // Local array for this effect run

    const setupDots = () => {
      // Clear previous dots from DOM and refs
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
      dots = []; // Reset local dots array
      dotsRef.current = []; // Reset ref for external use if any (not currently used externally)


      const containerWidth = container.offsetWidth;
      const containerHeight = container.offsetHeight;

      if (containerWidth === 0 || containerHeight === 0) return; // Avoid division by zero

      // Calculate spacing based on making the conceptual 'baseGridUnits' fit the container
      // We'll make the grid slightly larger than the container to ensure edges are covered
      // and then individual dots are positioned.
      // Let's base spacing on the smaller dimension to maintain aspect ratio of the grid somewhat.
      const smallerDim = Math.min(containerWidth, containerHeight);
      const spacing = smallerDim / (baseGridUnits -1); // -1 because N units have N-1 spaces

      // Calculate the total size of this conceptual grid
      const gridPixelWidth = (baseGridUnits - 1) * spacing;
      const gridPixelHeight = (baseGridUnits - 1) * spacing; // Assuming square grid for simplicity

      // Calculate offset to center this conceptual grid within the container
      const offsetX = (containerWidth - gridPixelWidth) / 2;
      const offsetY = (containerHeight - gridPixelHeight) / 2;


      for (let y = 0; y < baseGridUnits; y++) {
        for (let x = 0; x < baseGridUnits; x++) {
          const dot = document.createElement('div');
          dot.className = 'sonar-dot';
          dot.style.width = dot.style.height = `${dotSize}px`;

          // Calculate position within the conceptual grid
          const gridX = x * spacing;
          const gridY = y * spacing;

          // Actual pixel position within the container (top-left of dot)
          const finalPx = offsetX + gridX - dotSize / 2;
          const finalPy = offsetY + gridY - dotSize / 2;

          // Store center-relative coordinates for sonar logic,
          // these are relative to the center of the *container*, not the conceptual grid's 0,0
          dot.dataset.cx = (offsetX + gridX - containerWidth / 2).toString();
          dot.dataset.cy = (offsetY + gridY - containerHeight / 2).toString();
          
          dot.style.left = `${finalPx}px`;
          dot.style.top = `${finalPy}px`;

          container.appendChild(dot);
          dots.push(dot);
        }
      }
      dotsRef.current = dots; // Update the ref with the new dots
    };


    const setMousePosition = (clientX, clientY) => {
      const rect = container.getBoundingClientRect();
      const containerWidth = container.offsetWidth; // Get current width for centering
      const containerHeight = container.offsetHeight; // Get current height for centering
      mouseRef.current.x = clientX - (rect.left + containerWidth / 2);
      mouseRef.current.y = clientY - (rect.top + containerHeight / 2);
    };

    mouseRef.current = { x: 0, y: 0 };

    const handleMouseMove = (e) => setMousePosition(e.clientX, e.clientY);
    const handleTouchMove = (e) => {
      if (e.touches.length) setMousePosition(e.touches[0].clientX, e.touches[0].clientY);
    };
    const handleMouseLeave = () => {
      mouseRef.current = { x: 0, y: 0 };
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('touchmove', handleTouchMove, { passive: true });
    container.addEventListener('mouseleave', handleMouseLeave);

    const minRadius = 10; // Sonar min radius
    // maxRadius will be calculated dynamically in pingLoop or based on container size
    const growTime = 4000;
    startTimestampRef.current = null;

    const pingLoop = (timestamp) => {
      if (!container) return;
      if (!startTimestampRef.current) startTimestampRef.current = timestamp;
      const containerWidth = container.offsetWidth;
      const containerHeight = container.offsetHeight;
      const currentMaxRadius = Math.min(containerWidth, containerHeight) * 0.48; // Dynamically adjust sonar reach


      let elapsed = (timestamp - startTimestampRef.current) % growTime;
      let radius = minRadius + (currentMaxRadius - minRadius) * (elapsed / growTime);
      const tolerance = Math.max(2.5, currentMaxRadius * 0.03);

      for (const dot of dotsRef.current) { // Use dotsRef.current here
        const dx = mouseRef.current.x - Number(dot.dataset.cx);
        const dy = mouseRef.current.y - Number(dot.dataset.cy);
        const d = Math.sqrt(dx * dx + dy * dy);

        if (d > radius - tolerance && d < radius + tolerance) {
          dot.classList.add('sonar-active');
          setTimeout(() => {
            if (dot) dot.classList.remove('sonar-active');
          }, 220);
        }
      }
      animationFrameId.current = requestAnimationFrame(pingLoop);
    };
    
    const handleResize = () => {
        // On resize, re-setup the dots to fit the new dimensions
        // This will clear and recreate dots, which is simpler for a grid layout
        // than trying to individually reposition many grid-based dots.
        setupDots();
    };

    window.addEventListener('resize', handleResize);
    setupDots(); // Initial setup
    animationFrameId.current = requestAnimationFrame(pingLoop);

    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      // Clear dots from DOM
      if (container) {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
      }
      dotsRef.current = [];
    };
  }, []); // Empty dependency: runs once on mount, cleans up on unmount

  return (
    <div
      ref={containerRef}
      className="sonar-grid-container"
    ></div>
  );
};

export default SonarGridBackground;