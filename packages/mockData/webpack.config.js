const path = require('path');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production';

const config = {
  mode: devMode ? 'development' : 'production',
  devtool: 'source-map',
  entry: `${__dirname}/src/index.ts`,
  output: {
    path: `${__dirname}/dist/`,
    filename: 'index.js',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'jsx'],
  },
  node: {
    fs: 'empty',
  },
  module: {
    rules: [
      // {
      //   test: /\.js?$/,
      //   loader: "babel-loader",
      //   include: path.join(__dirname, "src")
      // },
      // {test: /\.js$/, use: "eslint-loader", exclude: /node_modules/},
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/,
      },
      // {
      //   test: /\.(jpe?g|png|gif|md)$/i,
      //   use: ["file-loader?hash=sha512&digest=hex&name=css/[name]-[hash].[ext]"]
      // },
    ],
  },
};

// config.optimization = !devMode
//   ? {
//       minimizer: [
//         new UglifyJsPlugin({
//           cache: true,
//           parallel: true,
//           sourceMap: true
//         }),
//         new OptimizeCSSAssetsPlugin({})
//       ]
//     }
//   : undefined;

module.exports = config;
