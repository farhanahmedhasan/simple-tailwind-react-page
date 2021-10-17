const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './index.html',
      './public/**/*.html',
      './public/index.html',
      './src/**/*.{js,jsx,ts,tsx}',
      './src/Components/**/*.{js,jsx}',
    ],
  },
  darkMode: false,

  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          xs: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },

      fontFamily: {
        sans: ['Lato', ...defaultTheme.fontFamily.sans],
      },

      screens: {
        xs: '375px',
        ...defaultTheme.screens,
        '2xl': '1536px',
        '3xl': '1800px',
      },

      height: {
        120: '460px',
      },
    },
  },

  plugins: [],
};
