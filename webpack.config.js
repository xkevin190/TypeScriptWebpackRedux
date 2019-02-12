const path = require("path")
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const merge = require('webpack-merge');
const config = require('./webpack.render.config');
const nodeExternals = require('webpack-node-externals');

module.exports = merge(config, {
  mode: 'development',
   entry: path.resolve(__dirname, 'app', 'index.tsx'),
   output:{
      path: path.resolve(__dirname, 'dist'),
      filename:'bundle.js',
       
   },
      module:{
          rules: [
            {
              test: /\.tsx?$/,
              enforce: 'pre',
              exclude: /node_modules/,
              use: [
                {
                  loader: 'tslint-loader',
                  options: {
                    formatter: 'tslint-formatter-eslint-style',
                  },
                },
                {
                  loader: 'eslint-loader',
                  options: {
                    emitWarning: true,
                  },
                },
              ],
            },
            {
               test: /\.tsx?$/,
               exclude: /node_modules/,
               use: {
                 loader: 'babel-loader',
                 options: {
                   cacheDirectory: true,
                   babelrc: false,
                   presets: [
                     ['@babel/preset-env', { targets: { "browsers": ["last 2 versions"] } }],
                     '@babel/preset-typescript',
                     '@babel/preset-react',
                   ],
                   plugins: [
                     ['@babel/plugin-proposal-decorators', { legacy: true }],
                     ['@babel/plugin-proposal-class-properties', { loose: true }],
                     '@babel/plugin-proposal-numeric-separator',
                     'react-hot-loader/babel',
                   ],
                 },
               },
             },
          ],
         
      },
      plugins: [new ForkTsCheckerWebpackPlugin()],
      devServer:{
          port:3000,
          contentBase: path.resolve(__dirname, 'app')
      },

      resolve: {
        extensions: ['.js', '.ts', '.tsx', '.json'],
        modules: [
          path.join(__dirname, 'app'),
          'node_modules',
        ]
      }
}) 