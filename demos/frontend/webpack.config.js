const path = require('path');
const { HotModuleReplacementPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const { readdirSync } = require('fs');
// const ESLintPlugin = require('eslint-webpack-plugin');

// const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
// const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

// function globIncludes(source) {
//   return readdirSync(source, { withFileTypes: true })
//     .filter((found) => found.isDirectory())
//     .map((found) => path.join(__dirname, `../../packages/${found.name}/src`));
// }
const Dotenv = require('dotenv-webpack');

const commonSASSpath = '../../shared/common/src/scss';

const sassLoader = () => ({
  loader: 'sass-loader',
  options: {
    sassOptions: {
      includePaths: [commonSASSpath],
    },
  },
});

module.exports = (_env, { mode }) => {
  const devMode = mode !== 'production';

  return {
    devtool: devMode ? 'inline-source-map' : false,
    entry: `./src/index.tsx`,
    output: {
      publicPath: '/',
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.mjs'],
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
      new Dotenv(),
    ],
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/i,
          // include: [
          //   path.join(__dirname, 'src'),
          //   path.join(__dirname, '../../shared/common/src'),
          //   ...globIncludes('../../packages'),
          // ],
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
        // {
        //   test: /\.mjs$/i,
        //   resolve: { byDependency: { esm: { fullySpecified: false } } }
        // },
        {
          test: /\.m?js/,
          resolve: {
            fullySpecified: false,
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
                    ? '[local]--[hash:base64:5]'
                    : '[hash:base64]',
                },
              },
            },
            sassLoader(),
          ],
        },
        {
          test: /\.(scss|css)$/,
          exclude: /module\.(scss|css)$/,
          use: [
            devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            sassLoader(),
          ],
        },
        {
          test: /\.(jpe?g|png|gif|ico)$/i,
          use: [
            'file-loader?hash=sha512&digest=hex&name=css/[name]-[hash].[ext]',
          ],
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
};
