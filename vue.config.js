module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-cal' : '',
  outputDir: 'docs',
  lintOnSave: true,
  productionSourceMap: false,
  devServer: {
    port: 8000,
    overlay: {
      errors: false,
      warnings: false
    }
  },
  chainWebpack: config => {
    config.plugins.delete('prefetch')

    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.whitespace = 'preserve'
        return options
      })
  }
}
