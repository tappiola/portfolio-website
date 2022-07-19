module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}', './node_modules/tw-elements/dist/js/**/*.js'],
  plugins: [
    // eslint-disable-next-line global-require
    require('tw-elements/dist/plugin'),
  ],
  theme: {
    fontFamily: {
      sans: ['Kanit', 'sans-serif'],
      mono: ['"Source Code Pro"', 'mono'],
    },
  },
};
