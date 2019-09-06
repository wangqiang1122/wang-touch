const path = require('path');
const HTMLWebapckPlugin = require('html-webpack-plugin'); // 打包html
const {CleanWebpackPlugin} = require('clean-webpack-plugin'); // 打包之前清除build的文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 把c所有的css文件都打包到一个文件里 就不需要的style——loader
const webpack = require('webpack');
// 往低端浏览器打入es6的原声实现方法 用babel


module.exports = {
    // 打包模式是开发模式
    mode: 'development',
    entry: './index.js',  //打包入口
    output: {
        path: path.resolve(__dirname,'./build'),
        filename: 'index_a.js'
    },  // 输出的地方
    // devtool: 'source-map',   /// sourceMap  会把.map文件
    // devtool: 'eval',  // eval 速度快
    devtool: 'cheap-Module-eval-source-map',   /// sourceMap 也会生成映射关系 但是不会生成单独的map文件

    // 遇到不能处理的模块就在这里写
    module: {
        // 遇到不认识的模块在这里找loader
        rules: [
            // 把es6
            {
                test:/\.js$/,
                exclude:'/node_modules/', // 排除node_modules文件夹
                use:[{
                    loader:'babel-loader',
                    options:{
                          // 这个是babel的语法转换规则
                        // presets: [["@babel/preset-env", {    // 转换规则的polyfill的配置项目 需要的才打包进来
                        //     useBuiltIns: "usage",//按需注入   不能只用他 会报错 这是个实验性功能 有不可确定性
                        //     corejs:2,
                        //     targets: {
                        //         edge: "17",
                        //         firefox: "60",
                        //         chrome: "67",
                        //         safari: "11.1"
                        //     },
                        // }]],
                        plugins: [['@babel/plugin-transform-runtime',{
                            // "absoluteRuntime": false,
                            // "corejs": 2,
                            // "helpers": true,
                            // "regenerator": true,
                            // "useESModules": false
                        }]],   //是以babel插件的形式引入
                    }
                }], //babel-loader只是babel和webpack通信的桥梁 不承担转换任务 babel-core 只是babel-core只是核心代码库
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: {
                    // url-loader  可以限定模块体积，根据体积来判断模块是否要被编译成base64 减少http请求
                    loader: "url-loader",  // 就是把模块放到里一个目录里，并且把位置返回给我们   （文件都可以用file-loader）
                    options: {
                        // name打包前的文件名字，hash 哈希 ext打包前的文件格式
                        name: '[name].[ext]',
                        // name: '[name]_[hash].[ext]',
                        // 打包的文件放的位置
                        outputPath: 'images/',
                        // 小于2030的才转换成base64
                        limit: 2030, // limit 是url-loader 的配置把图片编译成base64 图片超过了这个字节限制就不编译称base64
                    }
                }
            },
            // 引入css loader 处理css文件
            {
                test: /\.css$/,
                // 用两个loader需要用数组
                use: [ 'style-loader', 'css-loader', 'postcss-loader'] // css-loader 只是处理所有css文件并把所有的css集中到一起，
                                                     // style-loader是把集中到一起的css已style的形式放到html的head里
                // 也可以用字符串的形式
                // loader: 'style-loader!css-loader'
                // use 里面的loader只能写单个的
                // use: {
                //     loader:'style-loader!css-loader',
                // }
            },
            // loader 执行顺序 从做到右
            // 自动添加浏览器前缀的loader - postcss-loader
            {
                test: /\.scss/,
                // exclude: /node_modules/,  // loader的时候排除某个文件夹
                // 用两个loader需要用数组
                use: [ 'style-loader', 'css-loader','sass-loader','postcss-loader']
            },
            {
                test: /\.less/,
                // 用两个loader需要用数组
                use: [ {loader: MiniCssExtractPlugin.loader},   // HMR 不支持 把css抽离出来的检测自动更新的
                    {loader:'css-loader',options: {sourceMap: true}},{loader:'less-loader', options: {sourceMap: true}},{loader: 'postcss-loader'}]
            }
        ]
    },
    // webpack 插件
    plugins:[
        new CleanWebpackPlugin(),
        new HTMLWebapckPlugin({
            template: './index.html',    // 可以自己自定义模版  把js打包到这个html模版里
            title: '标题自己打包的',
            hash: true,
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({      // 把所有css抽离出来打包成一个文件
            filename: './css/[name].css',
            chunkFilename: '[id].css',
        }),
        new webpack.HotModuleReplacementPlugin(),  // webpack热更新插件
    ],
    // 配置webpack-dev-server
    devServer: {
        contentBase: './build', // 以build目录作为服务器的根目录
        open: true, // 是否打开浏览器
        port: '8081', // 启动的服务器端口
        hot: true,//  开启HMR
        //即便HMR不生效，浏览器也不自动刷新，就开启hotOnly
        hotOnly:false
    },
};