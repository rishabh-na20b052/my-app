/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // or 'media'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        // Example custom dark theme colors - adjust as needed
        background: '#0a0a0a', // Very dark background
        'surface': '#1a1a1a',   // Slightly lighter surface for cards/nav
        'primary': '#3b82f6',  // Example primary blue
        'primary-hover': '#2563eb',
        'text-main': '#e5e7eb',    // Light gray for main text
        'text-secondary': '#9ca3af', // Medium gray for secondary text
      },
      // Example: Add a subtle background pattern or gradient
      backgroundImage: {
        'hero-pattern': "radial-gradient(circle at top left, rgba(59, 130, 246, 0.15), transparent 40%), radial-gradient(circle at bottom right, rgba(139, 92, 246, 0.1), transparent 50%)",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'blob': 'blob 7s infinite',
        'hero-gradient': 'hero-gradient 15s ease infinite', // <-- ADDED
        'marquee-left': 'marquee-left 60s linear infinite',
        'marquee-right': 'marquee-right 60s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        'hero-gradient': { 
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': '50% 0%',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': '50% 100%',
          },
        },
        'marquee-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'marquee-right': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      }
    },
  },
  plugins: [],
}