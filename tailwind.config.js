/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.{html,js,hbs}",
    "./assets/**/*.{js,css}",
    "./assets/js/vendor/*.{js,css, json}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Rubik: ['Rubik, sans-serif']
      },
      colors: {
        'black': '#000000',
      }
    },
  },
  plugins: [],
}