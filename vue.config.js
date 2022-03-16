/*
 * @Author: qin
 * @Date: 2022-03-16 20:50:53
 * @LastEditTime: 2022-03-16 20:50:55
 * @FilePath: \ReleanVue\vue3_cms\vue.config.js
 *  -> The best way to explain it is to do it
 */
/*
 * @Author: qin
 * @Date: 2022-03-15 00:19:27
 * @LastEditTime: 2022-03-15 05:16:00
 * @FilePath: \vue3-ts-cms\vue.config.js
 *  -> The best way to explain it is to do it
 */
const path = require('path');

module.exports = {
  outputDir: './build',
  // publicPath: "./",
  devServer: {
    port: 3001,
    // proxy: {
    //   "/api": {
    //     target: "http://152.136.185.210:5500/",
    //     pathRewrite: {
    //       "^/api": "",
    //     },
    //     ws: true,
    //     changeOrigin: true,
    //   },
    // },
  },
  configureWebpack: {
    resolve: {
      alias: {
        views: '@/views',
      },
    },
    // plugins: [
    //   require('unplugin-element-plus/webpack')({
    //     // options
    //   }),
    // ],
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
