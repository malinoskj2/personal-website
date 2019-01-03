const path = require('path');
const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin');

module.exports = {
  // options...
  configureWebpack: {
    plugins: [
      new WasmPackPlugin({
        crateDirectory: path.resolve(`${__dirname}/src`, 'lib'),
      }),
    ],
  },
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
