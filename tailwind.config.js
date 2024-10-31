/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx,css}"],
  theme: {
    extend: {
      fontFamily: {
        'header': ['"Cormorant Infant"', 'ui-serif'],
        'sans': ['montserrat', 'sans-serif']
      },
    },
  },
  plugins: [],
}
