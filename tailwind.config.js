/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ternopil: "#384564",
        berezovytsia: "rgba(56, 69, 100, 0.14)",
        lviv: "#3A4562",
        mukachevo: "#878D9D",
        odesa: "#EFF0F5",
        rivne: "#E6E9F2",
        kyiv: "#2A3047",
        svalava: "#202336",
        uzhgorod: "rgba(161, 177, 219, 0.317343)",
        doneck: "rgba(85, 105, 158, 0.3)",
        dnipro: "#55699E",
        cherkasy: "#FFCF00",
        chernivtsi: "#988B49",
        zhytomyr: "rgba(255, 207, 0, 0.15)"
      },
      listStyleType: {
        square: "square",
      }
    },
  },
  plugins: [],
};
