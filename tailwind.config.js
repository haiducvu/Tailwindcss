module.exports = {
  mode: "jit",
  purge: [
    './**/*.html',
    './***{js,jsx,ts,tsx,vue}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        35: "35px"
      },
      colors: {
        gray33: "#333",
        orangefa: "#ffa400",
      }      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
