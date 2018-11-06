const path = require ('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './src/js/index.js',
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js'],
    modules: [
      './',
      './node_modules'
    ]
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
    }, {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: "babel-loader",
        options: {
            presets: ["@babel/preset-env"]
        }
      }
    }]
  },
  optimization: {
  	splitChunks: {

  		cacheGroups: {
  			commons: {
  				test: /[\\/]node_modules[\\/]/,
  				chunks: 'all',
  				name: 'vendor'
  			}
  		}
  	}
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
    new CopyWebpackPlugin([{
      from: './index.html',
      to: path.resolve(__dirname, 'dist')
   }])
  ]
};
