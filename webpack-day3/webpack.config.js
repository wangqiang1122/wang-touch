const path = require('path');
const CopyRight = require('./Plugins/copy-right-plugin');

module.exports = {
    mode: 'development',
    entry: './main.js',
    output: {
       path: path.resolve(__dirname,'./dist'),
       filename: '[name].js'
    },
    // loader 的地址查找的文件可以简写
    resolveLoader: {
        modules:['node_modules','./loader/'] // 默认是loader优先查找node_modules
    },
    module: {
        rules:[
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'replaceLoader',
                        options: {
                            name: '嘻嘻嘻嘻'
                        }
                    },
                    {
                        loader: 'replaceLoaderAsync',
                    }
                ],
            }
        ]
    },
    plugins: [
        new CopyRight({
            obj: 'ddddd'
        })
    ]
};