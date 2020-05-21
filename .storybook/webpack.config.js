const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // storybookBaseConfig.output.publicPath = 'http://localhost:6006/'
  config.resolve.extensions.push('.vue');
  config.resolve.alias['@'] = path.resolve(__dirname, '../src');
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  config.module.rules.push({
    test: /\.stories\.js?$/,
    loaders: [require.resolve('@storybook/source-loader')],
    enforce: 'pre'
  });

  // Make whatever fine-grained changes you need
  config.module.rules.push({
    test: /\.s(c|a)ss$/,
    use: [
      'vue-style-loader',
      'css-loader',
      {
        loader: 'sass-loader',
        // Requires sass-loader@^8.0.0
        options: {
          implementation: require('sass'),
          sassOptions: {
            fiber: require('fibers'),
            indentedSyntax: true // optional
          }
        }
      }
    ]
  });
  
  // Return the altered config
  return config;
};
