module.exports = {
  // options...
  chainWebpack: (config) => {
    config.module.rule('eslint').use('eslint-loader').options({
      fix: true,
    });
  },
  devServer: {
    port: 8081,
    watchOptions: {
      poll: true,
    },
  },
};
