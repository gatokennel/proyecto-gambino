/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'meat': '#841818',
      },
      height: {
        '90vh': '90vh',
        '10vh': '10vh',
        '90%': '90%',
        '10%': '10%'
      },
      width: {
        '90vw': '90vw',
        '10vw': '10vw',
        '90%': '90%',
        '10%': '10%'
      },
    },
  },
  plugins: [],
}

