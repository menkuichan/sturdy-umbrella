const path = require('path');
const webpack = require('webpack');

const isProd = (process.env.NODE_ENV || 'production') === 'production';

const assetPrefix = isProd ? '/sturdy-umbrella' : '';

module.exports = {
  assetPrefix: assetPrefix,
  pageExtensions: ['jsx', 'md', 'mdx'],
  distDir: 'build',
  webpack: (config, { defaultLoaders }) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.ASSET_PREFIX': JSON.stringify(assetPrefix),
      })
    );
    config.module.rules.push({
      test: /\.jsx?$/,
      exclude: /node_modules/,
      include: path.join(__dirname, './components'),
      use: [defaultLoaders.babel],
    });

    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
        },
      ],
    });

    config.resolve.alias.components = path.join(__dirname, './components');

    return config;
  },
};
