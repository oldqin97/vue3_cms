/*
 * @Author: qin
 * @Date: 2022-03-16 20:50:53
 * @LastEditTime: 2022-03-18 03:15:13
 * @FilePath: \vue3_cms\vue.config.js
 *  -> The best way to explain it is to do it
 */
const path = require('path');

module.exports = {
  outputDir: './build',
  // publicPath: "./",
  devServer: {
    port: 3001,
    proxy: {
      '^/api': {
        target: 'http://152.136.185.210:5000/',
        pathRewrite: {
          '^/api': '',
        },
        changeOrigin: true,
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        views: '@/views',
        '~': '@/http',
      },
    },
    plugins: [
      require('unplugin-element-plus/webpack')({
        // options
      }),
    ],
  },
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     views: '@/views'
  //   }
  // },
  // chainWebpack: config => {
  //   config.resolve.alias
  //     .set('@', path.resolve(__dirname, 'src'))
  //     .set('views', '@/views');
  // },
};
