/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        montez: ["Montez", "cursive"],
        engagement: ["Engagement", "cursive"],
      }, //end of fontFamily
    },
    container: {
      // you can configure the container to be centered
      center: true,

      // or have default horizontal padding
      padding: "4rem",

      // default breakpoints but with 40px removed
      screens: {
        sm: "580px",
        md: "708px",
        lg: "964px",
        xl: "1220px",
        "2xl": "1476px",
      },
    },
  },
  plugins: [],
};
