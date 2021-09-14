module.exports = {
  purge: ['./components/**/*.tsx', './pages/**/*.tsx', './public/**/*.html'], //add this line
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ytbg: '#e3e3e3'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}