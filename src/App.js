// src/App.jsx
import React, { useState, useEffect } from 'react';
// Change BrowserRouter to HashRouter
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import Loader from './components/common/Loader';

// Import your new pages
import PrivacyPolicy from './components/common/PrivacyPolicy'; // Adjusted import path
import TermsAndConditions from './components/common/TermsAndConditions';

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
    // Use HashRouter instead of BrowserRouter
    <Router>
      <div className='bg-black min-h-screen'>
        <Loader isLoading={isAppLoading} />

        {!isAppLoading && (
          <Navbar />
        )}

        <div
          className={`transition-opacity duration-700 ease-in-out ${
            isAppLoading ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'
          }`}
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