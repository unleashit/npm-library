const path = require("path");

module.exports = (baseConfig, env, defaultConfig) => {
  // Extend defaultConfig as you need.

  defaultConfig.module.rules = defaultConfig.module.rules.filter(rule => {
    return rule.test.toString().indexOf('scss') === -1;
  });

  // remove svg from font rule (need to add back if SVG fonts are used)
  defaultConfig.module.rules[2].test =  /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/

  defaultConfig.module.rules.push(
    {
      test: /\.(ts|tsx)$/,
      include: path.resolve(__dirname, "../packages"),
      loader: require.resolve("ts-loader")
    },
    {
      test: /\.scss$/,
      loaders: [
        require.resolve("style-loader"),
        {
          loader: require.resolve("css-loader"),
          options: {
            importLoaders: 1,
            modules: true,
            localIdentName: "[name]__[local]___[hash:base64:5]"
          }
        },
        require.resolve("sass-loader")
      ]
    },
    {
      test: /\.svg$/,
      use: [
        {
          loader: require.resolve("@svgr/webpack"),
          options: {
            native: false
          }
        }
      ]
    },
  );
  defaultConfig.resolve.extensions.push(".ts", ".tsx", "svg");

  return defaultConfig;
};
