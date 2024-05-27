/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary: '#0284c7',
      },
      fontFamily:{
        roboto:['Roboto', ...defaultTheme.fontFamily.sans]
      },
    },
  },
  plugins: [],
};

