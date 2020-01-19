const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')

module.exports = {
  entry: ['react-hot-loader/patch', './src'],
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [
    new HTMLPlugin({
      template: path.join(__dirname, 'src/index.html'),
    }),
  ],
}
