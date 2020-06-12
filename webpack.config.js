const path = require('path');

module.exports = {
  entry: './ts/index.ts',
  devtool: 'inline-source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  optimization: {
    minimize: true
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'decisiontree.js',
    library: 'decisiontree',
    libraryTarget: 'umd',
    globalObject: 'this',
    path: path.resolve(__dirname, 'dist'),
  },
};

