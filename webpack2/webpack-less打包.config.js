const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/4.js'
    },
    output: {
      path: path.resolve(__dirname,'build'),
      filename: '[name].min4.js'
    },
    // 模块
    module: {
      rules: [
          {
              test: /\.css$/,
              use: ['style-loader','css-loader','postcss-loader']   // style-loader 是把css样式输出出去
                                                                    // css-loader 是让webpack认识css文件并且不报错
                                                                      // css-loader 先执行 顺序很重要
          },
          {
              test: /\.(png|jpg|gif|jpeg)$/i,
              use: {
                  loader: 'url-loader',
                  options: {
                      outputPath: 'images/',
                      limit: 20*1024
                  }
              },
          },
          {
              test: /\.less/,
              use: ['style-loader','css-loader', 'less-loader']

              // css-loader 先执行 顺序很重要
          },
          // 编译es6
          {
              test: /\.jsx?$/,
              exclude: /node_modules/,  // 不包含
              use: {

              }
          }
      ]
    },
    // postcss-loader 引用需要单独引一个文件夹叫 postcss.config.js
}