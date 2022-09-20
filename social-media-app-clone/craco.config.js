// craco.config.js
const { whenDev } = require('@craco/craco');
const { ProgressPlugin } = require('webpack');

module.exports = {
  webpack: {
    plugins: [
      ...whenDev(
        () => [
          new ProgressPlugin({
            modulesCount: 10000,
            percentBy: 'entries',
            handler: (percentage, message, ...args) =>
              console.log(
                `Hey! I am webpack, I am ${percentage}% done with ${message}`,
                ...args
              ),
          }),
        ],
        []
      ),
    ],
  },
};
