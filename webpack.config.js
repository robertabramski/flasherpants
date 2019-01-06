let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'script.js'
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  resolve: {
    alias: {
      views: path.resolve(__dirname, 'src/views'),
      components: path.resolve(__dirname, 'src/components')
    }
  },
  module: {
    rules: [
      {
        test: /\.js/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss/,
        use: [
          {loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
              modules: 'global',
              camelCase: true,
              localIdentName: '[folder]-[local]'
            }
          },
          {
            loader: 'sass-loader',
            options: {
              data: '@import "src/index.scss";',
              includePaths: [
                path.resolve(__dirname, 'src/theme')
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Welcome to Flasherpants',
      filename: 'index.html',
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
      }
    }),
    new CleanWebpackPlugin([
      path.resolve(__dirname, 'dist'),
    ])
  ]
};
