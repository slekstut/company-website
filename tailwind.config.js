module.exports = {
  purge: [
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ["Montserrat"]
      },
      colors: {
        whiteColor: "#FFFFFE",
        darkerWhite: "#EFF0F3",
        orangeColor: "#FF8E3C",
        orangeDark: "#D9376E",
        blackColor: "#0D0D0D",
        blackLighter: "#2A2A2A"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
