// src/App.jsx
import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage'; // Assuming HomePage is your main page content
import Loader from './components/common/Loader';

function App() {
  const [isAppLoading, setIsAppLoading] = useState(true);

  // Callback function to be called by HeroSection when its video is ready
  const handleHeroVideoReady = () => {
    // console.log("App knows hero video is ready.");
    // You could add a slight artificial delay here if you want the loader to show a bit longer
    // setTimeout(() => {
    //   setIsAppLoading(false);
    // }, 500); // e.g., extra 0.5s
    setIsAppLoading(false);
  };

  useEffect(() => {
    // Optional: Add a timeout as a fallback in case the video event doesn't fire
    // or if something else prevents onHeroVideoReady from being called.
    const fallbackTimer = setTimeout(() => {
      if (isAppLoading) {
        // console.warn("Fallback: Hero video ready event not received, hiding loader anyway.");
        setIsAppLoading(false);
      }
    }, 7000); // e.g., 7 seconds max wait time

    return () => clearTimeout(fallbackTimer);
  }, [isAppLoading]); // Re-run if isAppLoading changes (to clear timer if loaded quickly)


  return (
    <div className='bg-black'>
      <Loader isLoading={isAppLoading} />

      {/* Conditionally render Navbar, HomePage, and Footer */}
      {!isAppLoading && (
        <Navbar />
      )}

      {/* Apply opacity transition to the main content area */}
      <div
        className={`transition-opacity duration-700 ease-in-out ${
          isAppLoading ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100' // Hide and collapse while loading
        }`}
      >
        <HomePage onHeroVideoReady={handleHeroVideoReady} />
      </div>

      {!isAppLoading && (
        <Footer />
      )}
    </div>
  );
}

export default App;