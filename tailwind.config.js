/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'white': '#FFFFFF',
      'bg-white': '#FAF9FD',
      'sky': '#52C1B9',
      'sky-dark': '#438ABC',
      'cyan': '#15E8BA',
      'indigo': '#604DBC',
      'black': '#080809',
      'dark': '#07070F',
      'gray': '#222125',
      'grey': '#2E2D32',
      'as': '#606060',
      'as-background': '#1B1B1D',
      'background': '#EFEDF5',
      'cyan-dark': '#52C1B9',
      'border': '#74B4B3',
      'rgb': 'rgba(177, 186, 237, 0.68)',
      'as-rgb': 'rgba(254, 254, 254, 0.4)',

    },
    extend: {
      spacing: {
        'space': '35.5px',
      },
    },
  },
  plugins: [],
}
