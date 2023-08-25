/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "icon-bg": "#f7f7f7",
        "icon-hover": "#3e8f75",
      },
      screens: {
        '2xl': '1600px',
      },
    },
  },
  plugins: [],
};
