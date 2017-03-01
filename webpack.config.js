var path = require('path')
var webpack = require('webpack')
require('dotenv').config()

module.exports = {
  entry: './bin/index.js',
  output: {
    path: __dirname + '/public/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      include: __dirname,
      query: {
        presets: [ 'es2015', 'react', 'stage-3' ]
      }
    },
    {
      test: /\.scss$/,
      loaders: [ 'style-loader', 'css-loader', 'sass-loader' ]
    }]
  },
  node: {
    fs: 'empty'
  }
}
