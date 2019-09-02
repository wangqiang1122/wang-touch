const path = require('path');

module.exports = {
  entry: './index.js',  //打包入口
  output: {
      path: path.resolve(__dirname,'./build')
  },  // 输出的地方
  // 遇到不能处理的模块就在这里写
  module: {
      // 遇到不认识的模块在这里找loader
    rules: [
        {
            test: /\.jpeg$/,
            use: {
                loader: "file-loader",
                options: {
                    // name打包前的文件名字，ext打包前的文件格式
                    name: '[name].[ext]',
                    // 打包的文件放的位置
                    outputPath: 'images/',
                }
            }
        }
    ]
  }
};