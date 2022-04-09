/*
 * @Author: qin
 * @Date: 2022-03-16 20:50:53
 * @LastEditTime: 2022-04-08 22:40:21
 * @FilePath: \vue3_cms\vue.config.js
 *  -> The best way to explain it is to do it
 */
const path = require('path');

module.exports = {
  outputDir: './admin',
  // publicPath: "/admin/",
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
    devServer: {
      port: 3001,
      historyApiFallback: true,
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
  },
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     views: '@/views'
  //   }
  // },
  // chainWebpack: config => {},
};
