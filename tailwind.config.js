/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: { max: "739px" },
      md: { min: "740px", max: "1023px" },
      lg: { min: "1024px", max: "1280px" },
      "2xl": { min: "1281px" },
    },
  },
  plugins: [],
};
