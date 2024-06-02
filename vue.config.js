module.exports = {
  // assetsDir: '/mew-components/',
  // publicPath: './', // Base directory for dev
  // css: {
  //   sourceMap: true,
  //   loaderOptions: {
  //     sass: {
  //       data: '@import "@/assets/styles/global.scss";'
  //     }
  //   }
  // },
  // chainWebpack: config => {
  //   config.module
  //     .rule('fonts')
  //     .test(/\.(ttf|otf|eot|woff|woff2)$/)
  //     .use('file-loader')
  //       .loader('file-loader')
  //       .tap(options => {
  //         options = {
  //           // limit: 10000,
  //           name: '/assets/fonts/[name].[ext]',
  //         }
  //         return options
  //       })
  //       .end()
  // },
  // vue.config.js
  chainWebpack: (config) => {
    config.resolve.alias.set('vue', '@vue/compat')

    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => {
        return {
          ...options,
          compilerOptions: {
            compatConfig: {
              MODE: 2
            }
          }
        }
      })
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: []
    }
  }
}
