const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

let mode = 'development';

if (process.env.NODE_ENV === 'production') {
  mode = 'production';
}

module.exports = {
  mode,
  entry: './src/basis/index.jsx',
  output: {
    filename: 'build.[contenthash].js',
    path: path.resolve('build'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, 
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      { 
        test: /\.(ts|tsx)$/, 
        loader: "ts-loader" 
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".ts", ".tsx"]
  },
  devServer: {
    hot: true,
    port: 4200
  },
  performance: {
    hints: false
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/basis/index.html'
    })
  ]
};