const path = require('path');

module.exports = {
  mode: "development",
  watch: true,
  entry: path.join(__dirname, 'src', 'js', 'main.js'),
  output: {
    path: path.join(__dirname, 'public', 'assets'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'src', 'js'),
        loader: 'babel-loader',
        options: {
          presets: ['@babel/react'],
        },
      },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: 'style-loader',
            options: {},
          },
          {
            loader: 'css-loader',
            options: {},
          },
          {
            loader: 'sass-loader',
            options: {},
          }
        ],
      },
    ],
  },
  devtool: 'source-map',
  target: 'web',
};