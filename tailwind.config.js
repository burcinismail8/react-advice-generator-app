/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#202632",
        "card-gray": "#313A49",
        "card-num": "#53FFAB",
        "card-content": "#CEE3E9",
      },
      boxShadow: {
        "3xl": "0 0 50px 5px rgba(83,255,171,0.7)",
      },
    },
  },
  plugins: [],
};
