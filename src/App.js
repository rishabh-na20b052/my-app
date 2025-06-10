// src/App.jsx
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar'; // <--- RE-ADD THIS IMPORT
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import Loader from './components/common/Loader';

// Assuming corrected import paths for your pages
import PrivacyPolicy from './components/common/PrivacyPolicy'; // Corrected path (from components/common)
import TermsAndConditions from './components/common/TermsAndConditions'; // Corrected path (from components/common)

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
    <Router>
      <div className='bg-[rgb(var(--color-background))] min-h-screen'>
        <Loader isLoading={isAppLoading} />

        {/* <--- RE-ADD NAVBAR CONDITIONAL RENDERING */}
        {!isAppLoading && (
          <Navbar />
        )}

        <div
          className={`transition-opacity duration-700 ease-in-out ${
            isAppLoading ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
          // Optional: Add a min-height for the content area to prevent sudden collapse if content is very short
          style={isAppLoading ? { minHeight: '100vh' } : {}}
        >
          <Routes>
            <Route path="/" element={<HomePage onHeroVideoReady={handleHeroVideoReady} />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          </Routes>
        </div>

        {!isAppLoading && (
          <Footer />
        )}
      </div>
    </Router>
  );
}

export default App;