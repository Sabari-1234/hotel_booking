/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      keyframes: {
        wave: {
          "0%": {
            width: "0%",
            left: "-500px",
          },

          "100%": { width: "100%", left: "-500px" },
        },
      },
      animation: {
        "waving-hand": "wave 20s linear 1",
      },
    },
  },
  plugins: [],
};
