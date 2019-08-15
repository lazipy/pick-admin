const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // 配置别名
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('locales', resolve('src/locales'))
      .set('models', resolve('src/models'))
      .set('pages', resolve('src/pages'))
      .set('services', resolve('src/services'))
      .set('shared', resolve('src/shared'))
  },

  // 向预处理器 Loader 传递选项
  css: {
    loaderOptions: {
      sass: {
        data: `@import "~@/shared/config/element-ui/element-variables.scss";`
      }
    }
  },

  // 设置服务和 mock
  devServer: {
    before: require('vue-cli-mock')
  }
}
