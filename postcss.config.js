/* eslint-disable global-require */
module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-preset-env')({ stage: 1 }),
  ],
};
/* eslint-enable global-require */