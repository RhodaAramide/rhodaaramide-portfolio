/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    container: {
      center: true,
      padding: "15px"
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px"
    },
    fontFamily: {
      primary: "var(--font-jetbrainsMono)",
    },
    extend: {
      colors: { 
        'primary': "#002349",
        accent: {
          DEFAULT: "#EF018A",
          hover: "#D8125B",
        },        
      },
    },
  },
  plugins: [],
}