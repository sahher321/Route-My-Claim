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
    },
  },
  plugins: [],
}
