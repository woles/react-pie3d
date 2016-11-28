const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const env = require('yargs').argv.env.mode;
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const libraryName = 'react-pie3d';

const config = {};

if (env === 'build') {
  config.entry = path.join(__dirname, '/src/index.js');

  config.output = {
    path: path.join(__dirname, '/lib'),
    filename: `${libraryName}.js`,
    library: libraryName,
    libraryTarget: 'umd',
  };

  config.plugins = [
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: { warnings: false }
    // })
  ];

  config.externals = {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    }
  };
} else if (env === 'example') {
  config.entry = {
    example: path.join(__dirname, '/example'),
    vendor: [
      'bootstrap-loader/extractStyles'
    ]
  };

  config.output = {
    path: path.join(__dirname, '/example/build'),
    filename: '[name].js',
  };

  config.plugins = [
    new ExtractTextPlugin('styles/[name].[contenthash].css'),

    new HtmlWebpackPlugin({
      template: 'example/index.html',
      hash: true,
      filename: 'index.html',
      inject: 'body'
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.[hash].js'
    })
  ];
} else {
  config.entry = {
    example: path.join(__dirname, '/example'),
    vendor: [
      'bootstrap-loader/extractStyles'
    ]
  };

  config.output = {
    path: path.join(__dirname, '/build'),
    filename: '[name].js',
  };

  config.plugins = [
    new ExtractTextPlugin('styles/[name].[contenthash].css'),

    new HtmlWebpackPlugin({
      template: 'example/index.html',
      hash: true,
      filename: 'index.html',
      inject: 'body'
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.[hash].js'
    })
  ];
}

config.devtool = 'source-map';

config.module = {
  loaders: [
    {
      test: /(\.jsx|\.js)$/,
      loader: 'babel',
      query:
      {
        presets: ['react']
      },
      exclude: /node_modules/
    },
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style', 'css?minimize!sass')
    }
    // {
    //   test: /(\.jsx|\.js)$/,
    //   loader: 'eslint-loader',
    //   exclude: /node_modules/
    // }
  ]
};

module.exports = config;
