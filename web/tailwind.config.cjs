/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    'index.html'
  ],
  theme: {
    extend: {
      colors: {
        background: '#09090a'
      },
      gridTemplateRows: {
        7: 'repeat(7, minMax(0,1fr))'
      }
    },
  },
  plugins: [],
}
