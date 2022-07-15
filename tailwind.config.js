/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      ...colors,
      'cgreen':{
        100: '#175D4038',
        200: '#53624F',
        300: '#175D40'
      },
      'black': '#515050',
      'cwhite': '#F2F0EC',
      'cyellow': '#F0BF0F'
    }
  },
  plugins: [],
}
