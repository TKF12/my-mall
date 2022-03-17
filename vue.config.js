const px2rem = require('postcss-px2rem');

module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          // 37.5px对应 1rem
          px2rem({ remUnit: 37.5 }),
        ],
      },
    },
  },
};
