/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#76c6f4",
        "primary-dark": "#0d6be8",
        "primary-200": "#acdefa",
      },
    },
    fontFamily: {
      sans: ["Signika", "Quicksand", "Ubuntu", "sans-serif"],
    },
  },
  plugins: [],
};
// #0d6be8 - #004aad - #acdefa
