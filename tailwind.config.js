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
        '10%': '10%',
        '40vh': '40vh',
        '70vh': '70vh',
        '100vh': '100vh',
        '40%': '40%',
        '80%': '80%',
        '70%': '70%',
        '30%': '30%',
        '20vh': '20vh'
      },
      width: {
        '90vw': '90vw',
        '10vw': '10vw',
        '90%': '90%',
        '10%': '10%',
        '40vw': '40vw',
        '20vw': '20vw',
        '100vw': '100vw',
        '80%': '80%',
        '60%': '60%',
        '95%': '95%',

      },
      backgroundImage: {
        'carneVacuna': 'url(./images/asado.jpeg)',
        'carneCerdo': 'url(./images/bondiola.jpeg)',
        'achuras': 'url(./images/molleja.jpeg)'
      }

    },
  },
  plugins: [],
}

