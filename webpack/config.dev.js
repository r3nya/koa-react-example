const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    './src/client.js'
  ],
  output: {
    path: path.join(__dirname, '../public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  module: {
    loaders: [
      { test: /\.(jpg|png)$/, loader: "url?limit=5000&name=[name]-[hash].[ext]"},
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
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
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        IS_BUNDLING_FOR_BROWSER: true
      }
    }),
  ],
  postcss: [
    autoprefixer({ browsers: ['last 2 versions'] }),
    require('postcss-nested'),
    require('postcss-custom-properties')
  ],
  resolve: {
    extensions: ['', '.js', '.json'],
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
  }
};
