const path = require ('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {

    mode: 'development',
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
      ],
      alias: {
        // Alias marionette to backbone.marionette to reduce the amount of typing in import statements
        marionette: 'backbone.marionette',
        // Alias wreqr to backbone.wreqr to reduce the amount of typing in import statements
        radio: 'backbone.radio'
      }
    },
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
              presets: ["@babel/preset-env"]
          }
        }
      }, {
        test: /\.(less|css)$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      }, {
        test: /\.hbs$/,
        use: 'handlebars-loader'
      }, {
        test: /\.html$/,
        loader: "underscore-template-loader"
      }
    ]
    },
    plugins: [

      // Modules to be injected everywhere
      new webpack.ProvidePlugin({
        $: 'jquery',
        _: 'lodash',
        jQuery: 'jquery',
        Backbone: 'backbone',
        Mn: 'backbone.marionette',
        Radio: 'backbone.radio'
      }),

      //use lodash in place of underscore
      new webpack.NormalModuleReplacementPlugin(/underscore/, 'lodash'),

      // Init HRM for development
      new webpack.HotModuleReplacementPlugin(),

      new ExtractTextPlugin("styles.css"),

      new CopyWebpackPlugin([{
        from: './index.html',
        to: path.resolve(__dirname, 'dist')
      }])
    ],
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
    devtool: 'eval-source-map',
    devServer: {
     contentBase: path.join(__dirname, 'dist'),
     compress: true,
     port: 9000
   }
};
