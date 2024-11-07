/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#7c3aed',
        secondary: '#64748b',
        dark: '#1e1b4b',
      },
      screens: {
        '2xl':'1320px'
      },
    },
  },
  plugins: [],
}

