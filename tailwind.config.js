/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    fontFamily: {
      sans: ["Noto Sans", "sans-serif"],
    },
    extend: {
      colors: {
        black1: "#121212",
        black2: "#1A1A1A",
        white1: "#FCFCFC",
        white2: "#F5F5F5",
        secondary1: "#E5C453",
        secondary2: "#E57255",
        secondary3: "#46BDDF",
      },
      backgroundImage: {
        "nav-gradient": "linear-gradient(to right,#859398, #284860 );",
        "sidebar-gradient":
          "linear-gradient(to top, #0e1c26, #13232d, #172b34, #1d323b, #223a42, #243e47, #25424b, #274650, #264754, #254759, #26485d, #294861);",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
