module.exports = {
    mode: 'development',   // production  能打多大就打多大 development  按需打包
    entry:  `${__dirname}/src/2.js`,               // 最好也写成绝对路径
    output: {
        filename: '3.bundle.js',
        path: `${__dirname}/dist/`    // 要写绝对路径
    },
    // 模块(插件)
    module: {
        // 规则
        rules:[
            {
                test: /\.css$/,   // 正则 文件的类型
                use: ['style-loader','css-loader'],     // 启用模块的名字 从左到右编译
            },
        ],
    },
};