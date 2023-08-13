/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        green: {
          dark: "#377375",
          light: "#DDEDE3",
        },
        grey: {
          primary: "#DAD7CD",
        },
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
    },
    screens: {
      // xs: "0px",
      // => @media (min-width: 0) { ... }
      sm: "576px",
      // => @media (min-width: 576px) { ... }
      md: "768px",
      // => @media (min-width: 960px) { ... }
      lg: "992px",
      // => @media (min-width: 992px) { ... }
      xl: "1200px",
      // => @media (min-width: 1200px) { ... }
      xxl: "1400px",
      // => @media (min-width: 1400px) { ... }
    },
  },
  plugins: [require("flowbite/plugin")],
};
