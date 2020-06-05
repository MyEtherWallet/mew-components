module.exports = {
  assetsDir: 'assets/',
  publicPath: '/', // Base directory for dev
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        data: `@import "@/assets/styles/global.scss";`
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule("fonts")
      .test(/\.(ttf|otf|eot|woff|woff2)$/)
      .use("file-loader")
        .loader("file-loader")
        .tap(options => {
          options = {
            // limit: 10000,
            name: '/assets/fonts/[name].[ext]',
          }
          return options
        })
        .end()
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: []
    }
  }
}
