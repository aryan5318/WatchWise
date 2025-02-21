/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Ensure correct file paths
  theme: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')], // Plugin added correctly
};
