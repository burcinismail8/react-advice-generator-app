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
    },
  },
  plugins: [],
};
