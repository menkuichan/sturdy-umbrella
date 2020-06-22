const path = require('path');
const webpack = require('webpack');

const isProd = (process.env.NODE_ENV || 'production') === 'production';

const assetPrefix = isProd ? '/sturdy-umbrella' : '';

module.exports = {
  pageExtensions: ['jsx', 'md', 'mdx'],
  distDir: 'build',
  webpack: (config, { defaultLoaders }) => {
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

    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.ASSET_PREFIX': JSON.stringify(assetPrefix),
      })
    );

    return config;
  },
  exportPathMap: () => ({
    '/': { page: '/' },
    '/Checkbox': { page: '/Checkbox' },
    '/TextField': { page: '/TextField' },
  }),
  assetPrefix: assetPrefix,
};
