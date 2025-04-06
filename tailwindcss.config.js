/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        fontFamily: {
          oswald: ['Oswald', 'sans-serif'],
          montserrat: ['montserrat', 'Oswald'],
          sans: ['Arial', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }