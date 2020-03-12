const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    './components/button/button': './src/components/button/button.tsx',
    './components/button/button.native': './src/components/button/button.native.tsx'
  },
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  externals: ['react', 'react-native', 'react-native-web'],
  module: {
    rules: [
      {
        test: /\.tsx$/,
        loader: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/
      }
    ]
  },
  optimization: {
    minimize: false
  }
}
