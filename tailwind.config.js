/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors:{
          'main-gray':'#5F5F5F',
          'main-yellow':'#FFDF66'
        },
        container: {
          center: true, 
          padding: "1rem", 
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "960px",
          xl: "1140px",
          "2xl": "1320px",
        },
        maxWidth: {
          sm: "100%", // or customize as per your design
          md: "720px",
          lg: "960px",
          xl: "1140px",
          "2xl": "1320px",
        },
      },
    },
    plugins: [],
  }