/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./src/app/**/*.{js,ts,jsx,tsx}",
  "./src/components/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {screens: {
     sm2: { min: "350px", max: "480px" },
      sm: { min: "310px", max: "480px" },
      md: { min: "481px", max: "768px" },
      mdl: { min: "769px", max: "1023px" },
      lg: { min: "1024px", max: "1279px" },
      xl: { min: "1280px", max: "1536px" },
      "2xl": { min: "1537px", max: "1920px" },
      "3xl": { min: "1921px" },
      "4xl": { min: "2300px" },
      "5xl": { min: "2500px" },
    },},
  },
  plugins: [],
}
