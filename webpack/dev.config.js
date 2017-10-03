const commonConfig = require('./common.config')
const devConfig = require('./dev')
const merge = require('webpack-merge')

module.exports = merge(commonConfig, devConfig)
