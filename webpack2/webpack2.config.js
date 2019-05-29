const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        a: './src/1.js',
        b: './src/2.js'
    },
    output: {
      path: path.resolve(__dirname,'build'),
      filename: '[name].min.js'
    },
    // 模块
    module: {
      rules: [
          {
              test: /\.css$/,
              use: ['style-loader','css-loader']  // style-loader 是把css样式输出出去
                                                  // css-loader 是让webpack认识css文件并且不报错
                                                  // css-loader 先执行 顺序很重要
          }
      ]
    }
}