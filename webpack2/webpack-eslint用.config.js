const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/1.js',
    output: {
      path: path.resolve(__dirname,'build'),
      filename: 'bundle.min.js'
    },
    module: {
      rules: [
          {
              test:/\.jsx?$/i,
              exclude: /node_modules/,
              loader: 'eslint-loader',
              options: {},
          }
      ],
    },
    devtool: 'source-map'
}