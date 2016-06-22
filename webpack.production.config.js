'use strict';

var Webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var distPath = path.join(__dirname, '/dist/');
var mainPath = path.join(__dirname, 'app/index.js');

var HtmlWebpackPlugin = require("html-webpack-plugin");
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});

var config = {

  // We change to normal source mapping
  devtool: 'source-map',
  entry: mainPath,
  output: {
    path: distPath,
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [HtmlWebpackPluginConfig],
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: [nodeModulesPath]
    },{
      test: /\.css$/,
      loader: 'style!css'
    }]
  }
};

module.exports = config;
