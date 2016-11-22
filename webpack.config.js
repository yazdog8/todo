const path = require('path')
const webpack = require('webpack')
const DashboardPlugin = require('webpack-dashboard/plugin')

module.exports = {
    entry: [
    'bootstrap-loader',
    'font-awesome-sass!./font-awesome-sass.config.js',
    './app/Index.js'
  ],
  output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js"
  },
  resolve: {
      extensions: ['', '.js', '.jsx']
  },
  devtool: 'source-map',
  module: {
    preLoaders: [
        // Javascript
        { test: /\.jsx?$/, loader: 'eslint', exclude: /(node_modules|font-awesome-sass.config.js)/ }
    ],
    loaders: [{
      test: /\.js$/,
      include: __dirname + '/app',
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'es2017']
      }
    }, {
      test: /\.scss$/,
      loader: 'style!css!sass'
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }, {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url-loader?limit=10000&mimetype=application/font-woff'
    }, {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader'
    }]
  },
  eslint: {
    failOnWarning: false,
    failOnError: true
  },
  plugins: [
    new DashboardPlugin()
  ]
}
