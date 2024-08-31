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
        }
      },
    },
    plugins: [],
  }