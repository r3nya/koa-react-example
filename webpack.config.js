const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: './src/client.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.styl$/, loader: "style!css!postcss" },
      { test: /\.(jpg|png)$/, loader: "url?limit=5000&name=[name]-[hash].[ext]"},
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        IS_BUNDLING_FOR_BROWSER: true
      }
    }),
  ],
  postcss: [
    autoprefixer({ browsers: ['last 2 versions'] })
  ],
  resolve: {
    extensions: ['', '.js', '.json']
  }
};
