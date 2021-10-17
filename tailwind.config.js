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
    extend: {},
  },

  plugins: [],
};
