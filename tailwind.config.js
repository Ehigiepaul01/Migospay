/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screen: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },

    extend: {
      colors: {
        yellow: 'rgb(253, 253, 7)',
        lightgray: 'rgb(177, 175, 175)',
      }
    },
  },
  plugins: [],
}

