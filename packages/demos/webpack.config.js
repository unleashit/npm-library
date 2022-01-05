const path = require('path');
const { HotModuleReplacementPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const ESLintPlugin = require('eslint-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production';
// const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
// const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const config = {
  devtool: 'source-map',
  entry: `./src/index.js`,
  output: {
    publicPath: '/',
    // path: `${__dirname}/dist/`,
    // filename: 'index.js',
    // libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'jsx'],
    fallback: { fs: false },
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    // new ESLintPlugin({
    //   context: './src',
    //   extensions: ['js', 'jsx', 'ts', 'tsx'],
    // }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
      // chunkFilename: devMode ? '[id].css' : '[id].[contenthash].css',
      chunkFilename: '[id].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      },
      {
        test: /module\.(scss|css)$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: {
                mode: 'local',
                localIdentName: devMode
                  ? '[name]__[local]--[hash:base64:5]'
                  : '[hash:base64]',
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(scss|css)$/,
        exclude: /module\.(scss|css)$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(jpe?g|png|gif|ico)$/i,
        use: ['file-loader?hash=sha512&digest=hex&name=css/[name]-[hash].[ext]'],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              native: false,
            },
          },
        ],
      },
      {
        test: /\.(eot|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
        use: ['file-loader?name=fonts/[name].[ext]'],
      },
      { test: /\.md$/, loader: 'ignore-loader' },
    ],
  },
  devServer: {
    static: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    port: 4000,
    open: true,
    hot: true,
  },
};

// config.externals = !devMode
//   ? {
//       react: {
//         commonjs: 'react',
//         commonjs2: 'react',
//         amd: 'React',
//         root: 'React',
//       },
//       'react-dom': {
//         commonjs: 'react-dom',
//         commonjs2: 'react-dom',
//         amd: 'ReactDOM',
//         root: 'ReactDOM',
//       },
//     }
//   : undefined;

// config.optimization = !devMode
//   ? {
//       minimizer: [
//         new UglifyJsPlugin({
//           cache: true,
//           parallel: true,
//           sourceMap: false
//         })
//       ]
//     }
//   : undefined;

const removeUndefined = (c) =>
  Object.keys(c).reduce((a, b) => {
    // eslint-disable-next-line no-param-reassign
    if (b !== undefined) a[b] = config[b];
    return a;
  }, {});

module.exports = removeUndefined(config);
