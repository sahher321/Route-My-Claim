module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
        primaryBlue: "#061463",
        secondaryBlue: "#0E6BE6",
      },
        fontFamily: {
        myfont: ["MyFont", "sora"],
      },
      wordSpacing: {
        wider: '0.25rem',
        widest: '0.5rem',
      },
    },
  },
  plugins: [function ({ addUtilities }) {
      addUtilities({
        '.word-spacing-wide': { wordSpacing: '0.25rem' },
        '.word-spacing-wider': { wordSpacing: '0.5rem' },
      });
    },],
}
