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
          montserrat: ['Montserrat', 'sans-serif'],
          hind: ['Hind Guntur', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }