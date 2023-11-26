const colors = require('tailwindcss/colors')

module.exports = {
  purge: ["./public/**/*.html", "./public/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        't-blue' : '#0368B1',
        't-red' : '#ff0000'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
