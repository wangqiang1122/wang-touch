const path = require('path');

module.exports = {
    mode: 'development',
    entry: ['./src/3.js', './src/4.js'],
    output: {
      path: path.resolve(__dirname,'build'),
      filename: 'bundle4.min.js'
    },
    module: {
      rules: [
          {
              test:/\.jsx?$/i,
              exclude: /node_modules/,
              loader: 'eslint-loader',
              options: {},
          },
          {
              test:/\.css?$/i,
              use: ['style-loader','css-loader','postcss-loader']
          },
          {
              test:/\.(png|jpg|jpeg)?$/i,
              use: {
                  loader: 'url-loader',
                  options: {
                      outputPath: 'images/',
                      limit: 20*1024
                  }
              },
          }
      ],
    },
    devtool: 'source-map'
}
