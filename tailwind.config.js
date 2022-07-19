// eslint-disable-next-line import/no-extraneous-dependencies
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}', './node_modules/tw-elements/dist/js/**/*.js'],
  plugins: [
    // eslint-disable-next-line global-require
    require('tw-elements/dist/plugin'),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Kanit', ...defaultTheme.fontFamily.sans],
        mono: ['"Source Code Pro"', ...defaultTheme.fontFamily.mono],
      },
    },
  },
};
