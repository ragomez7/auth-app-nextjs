/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'black': "#000000",
      'white': "#FFFFFF",
      'grey': "#9e9e9e",
    },
    extend: {},
  },
  plugins: [],
}