/* eslint-env node */
/* eslint no-var: 0 */
/* eslint prefer-arrow-callback: 0 */

var port = 8080
var webpack = require("webpack")
var WebpackDevServer = require("webpack-dev-server")
var config = require("../webpack.config")

const server = new WebpackDevServer(webpack(config), {
  historyApiFallback: true,
  publicPath: config.output.publicPath,
  stats: {
    assets: true,
    chunks: false,
    chunkModules: false,
    colors: true,
    hash: false,
    timings: true,
    version: false
  }
})

server.listen(port, "localhost")
