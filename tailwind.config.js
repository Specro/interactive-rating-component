/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Overpass', 'sans-serif']
      },
      colors: {
        orange: '#FB7413',
        'light-gray': '#959EAC',
        'dark-blue': '#252D37',
        'very-dark-blue': '#121417'
      },
      maxWidth: {
        card: '420px'
      }
    },
  },
  plugins: [],
}

