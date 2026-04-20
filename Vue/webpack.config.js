const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV || 'development',

  entry: './src/main.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  // ✅ Webpack 5–compatible devtool value
  devtool: 'eval-cheap-module-source-map',

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },

  plugins: [
    new VueLoaderPlugin()
  ],

  devServer: {
    hot: true,
    open: true,
    port: 8080,
    historyApiFallback: true
  },

  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      vue$: '@vue/runtime-dom'
    }
  }
};