/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainRed: "#fc4747",
        mainGreyishBlue: "#10141e",
        mainLightBlue: "#5a698f",
        mainDarkBlue: "#161d2f",
        mainWhite: "#ffffff",
      },
    },

    fontFamily: {
      mainFont: ["Outfit", "sans-serif"],
    },

    fontSize: {
      headingL: "32px",
      headingM: "24px",

      headingXS: "18px",

      bodyM: "15px",
      bodyS: "13px",
    },

    fontWeight: {
      light: "300",
      medium: "500",
    },
  },
  plugins: [],
};
