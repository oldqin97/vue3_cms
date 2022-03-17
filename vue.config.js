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
