const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src/client.jsx'),
  module: {
    rules: [{
      test: /\.(jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: ['@babel/plugin-transform-react-jsx']
        }
      }
    }]
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
  },
};
