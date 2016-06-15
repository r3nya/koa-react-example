var path = require('path');

require('babel-polyfill');
require('babel-register')({
  presets: ['es2015', 'stage-0', 'react'],
  plugins: [
    'transform-decorators-legacy',
    [
      'babel-plugin-webpack-alias', {
        'config': path.resolve(__dirname, '../../webpack/config.node'),
      }
    ],
    [
      'webpack-loaders', {
        'config': path.resolve(__dirname, '../../webpack/config.node'),
        'verbose': false
      }
    ]
  ]
});
require('./server');
