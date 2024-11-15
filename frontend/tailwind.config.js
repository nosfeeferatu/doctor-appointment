/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#0044AA",
        iconColor: "#ccf0f3",
        yellowColor: "#FEB60D",
        greenColor: "#22c55e",
        purpleColor: "#9771FF",
        irisBlueColor: "#01B5C5",
        headingColor: "#00327E",
        textColor: "#4E545F",
        whiteColor: "#fff",
        darkerColor: "#00204f",
        lighterColor: "#A6C9FF",
      },

      boxShadow: {
        panelShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;",
      },
    },
  },
  plugins: [],
};
