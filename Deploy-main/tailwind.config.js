/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A192F", // Deep navy blue for primary backgrounds
        background: "#FFFFFF", // White for cards/section backgrounds
        accent: "#00AEEF", // Vibrant cyan for CTAs, highlights
        "text-light": "#CCD6F6", // Light slate for text on dark backgrounds
        "text-dark": "#112240", // Dark charcoal for text on light backgrounds
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
