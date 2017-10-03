const commonConfig = require('./common.config')
const prodConfig = require('./prod')
const merge = require('webpack-merge')

module.exports = merge(commonConfig, prodConfig)
