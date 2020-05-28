const path = require('path');

module.exports = {
  pageExtensions: [
    'jsx', 'md', 'mdx',
  ],
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

    return config;
  },
};
