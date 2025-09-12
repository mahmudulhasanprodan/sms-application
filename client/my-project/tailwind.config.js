/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Lato: "var(--Lato)",
    },
    extend: {
      backgroundImage: {
        BgColor: "var(--BgColor)",
      },
    },
  },
  plugins: [],
};