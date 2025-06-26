/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        georgia: ['GeorgiaCustom', 'serif'],
        montserrat: ['MontserratCustom', 'sans-serif'],
      },
      colors: {
        deepTuscanRed: '#6E434F',       
        deeplilac: '#8E44AD',    
        isabelline : '#F2F0EE'
      },

    },
  },
  plugins: [],
}

