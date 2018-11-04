const path = require ('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.(less|css)$/,
      use: ExtractTextPlugin.extract({
        use: [
          'css-loader',
          'less-loader'
        ]
      })
    }]
  },
  plugins: [
    new ExtractTextPlugin("styles.css")
  ]

};
