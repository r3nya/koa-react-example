var path = require('path');
var autoprefixer = require('autoprefixer');

module.exports = {
  output: {
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['', '.js', 'json'],
    alias: {
      root: path.resolve(__dirname, '../'),
      src: path.resolve(__dirname, '../src/'),
      webpackPath: path.resolve(__dirname),
      actions: path.resolve(__dirname, '../src/actions/'),
      components: path.resolve(__dirname, '../src/components/'),
      containers: path.resolve(__dirname, '../src/containers/'),
      constants: path.resolve(__dirname, '../src/constants/'),
      reducers: path.resolve(__dirname, '../src/reducers/')
    }
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: [
          'style?sourceMap',
          'css?importLoaders=2&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss'
        ]
      }
    ]
  },
  postcss: [
    autoprefixer({ browsers: ['last 2 versions'] }),
    require('postcss-nested'),
    require('postcss-custom-properties')
  ]
};
