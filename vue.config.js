'use strict'
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const name = '快火数据'

module.exports = {
  lintOnSave: process.env.NODE_ENV === 'development',
  // 路径别名
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        comp: resolve('src/components'),
        req: resolve('src/service'),
      },
    },
  },
}
