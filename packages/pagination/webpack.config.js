"use strict";

const path = require("path");
const devMode = process.env.NODE_ENV !== "production";
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const config = {
  mode: "production",
  devtool: "source-map",
  entry: __dirname + "/src/",
  output: {
    path: __dirname + "/dist/",
    filename: "index.js",
    libraryTarget: "umd"
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: devMode ? "[name].css" : "[name].[contenthash].css",
      chunkFilename: devMode ? "[id].css" : "[id].[contenthash].css"
    })
    // new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        include: path.join(__dirname, "src")
      },
      // {test: /\.js$/, use: "eslint-loader", exclude: /node_modules/},
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader?sourceMap&modules=true&importLoaders=true&localIdentName=[name]-[hash:base64:5]",
          "sass-loader"
        ]
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: ["file-loader?hash=sha512&digest=hex&name=css/[name]-[hash].[ext]"]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              native: false
            }
          }
        ]
      },
      {
        test: /\.(eot|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
        use: ["file-loader?name=fonts/[name].[ext]"]
      }
    ]
  }
};

config.externals =
  !devMode
    ? {
        react: "commonjs react"
      }
    : undefined;

config.optimization =
  !devMode
    ? {
        minimizer: [
          new UglifyJsPlugin({
            cache: true,
            parallel: true,
            sourceMap: false
          }),
          new OptimizeCSSAssetsPlugin({})
        ]
      }
    : undefined;

module.exports = config;
