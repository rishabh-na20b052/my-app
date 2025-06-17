// src/App.jsx
import React, { useState, useEffect } from "react";

import Navbar from "./components/layout/Navbar"; // <--- RE-ADD THIS IMPORT
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import Loader from "./components/common/Loader";

// Assuming corrected import paths for your pages
function App() {
  const [isAppLoading, setIsAppLoading] = useState(true);

  const handleHeroVideoReady = () => {
    setIsAppLoading(false);
  };

  useEffect(() => {
    const fallbackTimer = setTimeout(() => {
      if (isAppLoading) {
        setIsAppLoading(false);
      }
    }, 7000);

    return () => clearTimeout(fallbackTimer);
  }, [isAppLoading]);

  return (
    
      <div className="bg-[rgb(var(--color-background))] min-h-screen">
        <Loader isLoading={isAppLoading} />

        {!isAppLoading && <Navbar />}

        <div
          className={`transition-opacity duration-700 ease-in-out ${
            isAppLoading ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          // Optional: Add a min-height for the content area to prevent sudden collapse if content is very short
          style={isAppLoading ? { minHeight: "100vh" } : {}}
        >
          <HomePage onHeroVideoReady={handleHeroVideoReady} />
        </div>

        {!isAppLoading && <Footer />}
      </div>
  );
}

export default App;
