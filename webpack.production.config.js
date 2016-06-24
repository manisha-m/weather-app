'use strict';

var Webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var distPath = path.join(__dirname, '/dist/');
var mainPath = path.join(__dirname, 'app/index.js');

var HtmlWebpackPlugin = require("html-webpack-plugin");

var config = {

  // We change to normal source mapping
  devtool: 'source-map',
  entry: mainPath,
  output: {
    path: distPath,
    filename: '[name]-[hash].min.js',
    publicPath: '/'
  },
  plugins: [
    new Webpack.optimize.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
    	template: __dirname + '/app/index.html',
    	filename: 'index.html',
    	inject: 'body'
    }),
    new ExtractTextPlugin('[name]-[hash].min.css'),
    new Webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true
      }
    }),
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
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
