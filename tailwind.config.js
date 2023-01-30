/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.{html,js,hbs}",
    "./assets/**/*.{js,css}",
    "./assets/js/vendor/*.{js,css, json}",
  ],
  theme: {
    fontFamily: {
      Montserrat: ["Montserrat", "sans-serif"],
      SourceSansPro: ["Source Sans Pro", "sans-serif"],
    },
    extend: {
    },
  },
  plugins: [
    
  ],
}