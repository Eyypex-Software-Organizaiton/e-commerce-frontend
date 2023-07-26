/** @type {import('tailwindcss').Config} */
module.exports = {

  

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

    "node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
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
        'sans': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
