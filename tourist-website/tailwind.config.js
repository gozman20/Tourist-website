/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "rgb(0, 179, 0)",
      },
      // screens: {
      //   lg: "1024px",

      //   md: "640px",
      // },
    },
  },
  plugins: [],
};
