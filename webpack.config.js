const webpack = require('webpack');
module.exports = {
  entry: './docs/index.tsx',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: ['babel-loader', 'awesome-typescript-loader'],
        include: __dirname
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
};
