// src/components/common/Loader.jsx
import React from 'react';

const Loader = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-background z-[200] flex flex-col items-center justify-center"> {/* Increased z-index */}
      <p className="mt-4 text-text-main text-lg">Loading</p>
      <div class="loader"></div>
    </div>
  );
};
export default Loader;