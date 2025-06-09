// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router, Routes, Route

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage'; // Assuming HomePage is your main page content
import Loader from './components/common/Loader';

// Import your new pages
import PrivacyPolicy from './components/common/PrivacyPolicy'; // Adjusted import path
import TermsAndConditions from './components/common/TermsAndConditions'; // Adjusted import path

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
    // Wrap your entire application with BrowserRouter for routing
    <Router>
      {/* Use your CSS variable for the background color */}
      <div className='bg-[rgb(var(--color-background))] min-h-screen'> {/* Added min-h-screen for consistent background */}
        <Loader isLoading={isAppLoading} />

        {/* Conditionally render Navbar */}
        {!isAppLoading && (
          <Navbar />
        )}

        {/* Apply opacity transition to the main content area which now contains all routes */}
        <div
          className={`transition-opacity duration-700 ease-in-out ${
            isAppLoading ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100' // Hide and collapse while loading
          }`}
        >
          {/* Define your routes within the Routes component */}
          <Routes>
            <Route path="/" element={<HomePage onHeroVideoReady={handleHeroVideoReady} />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            {/* Add more routes here as needed */}
          </Routes>
        </div>

        {/* Conditionally render Footer */}
        {!isAppLoading && (
          <Footer />
        )}
      </div>
    </Router>
  );
}

export default App;