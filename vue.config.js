const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, //关闭eslint检查
  devServer: {
    port: 8081,
    proxy: {
      '/book': {
        target: 'http://192.168.1.208:3300',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/book/, ''),
      },
    },
    headers: {
      // 允许跨域访问子应用页面
      "Access-Control-Allow-Origin": "*",
    },
  },
})
