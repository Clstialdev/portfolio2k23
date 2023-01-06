/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1082px",
        xl: "1280px",
        sh: { raw: "(max-height: 750px)" },
        xxl: "1536px",
        xxxl: "1950px",
        x3xl: "2048px",
        x4k: "3500px",
      },
    },
  },
  plugins: [],
};
