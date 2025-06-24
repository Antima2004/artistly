/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',   // black
        foreground: '#ffffff',   // white
        accent: '#ff4081',       // optional accent (pinkish)
      },
    },
  },
  plugins: [],
};

