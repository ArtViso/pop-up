/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'floral-white': '#FFF8EF',
        'seal-brown': '#3C1F1D',
        'linen-white':'#F6EFE6',
        'linen-red':'#876A68',
        'linen-orange':'#9C4619',
        'linen-black-red':'#3E1007',
        'gray':'#ACAAAD',
        'gray-white':'#D1CAC1',
        'black-rgba': 'rgba(0, 0, 0, 0.32)',
        'gray-rgba':'rgba(51, 51, 51, 0.16)'
      },
      fontFamily: {
        body: ['Open Sans'],
      },
      container: {
        padding: '20px',
        center: true
      },
    },
  },
  plugins: []
}
