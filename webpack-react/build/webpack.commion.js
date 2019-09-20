const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

// 热更新插件
const webpack = require('webpack');
//拷贝文件夹
const CopyWebpackPlugin = require('copy-webpack-plugin');
// 删除文件
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    // entry: {
    //     lodash: "./loash.js",
    //     index: "./main.js"
    // },
    entry: "./main.js",
    output: {
        path: path.resolve(__dirname,'../dist'), //resolve
        filename: '[name]_[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                exclude:'/asset/',
                use: {
                    loader: 'url-loader',
                    options: {
                        name: '[name].[ext]',
                        limit: 0,
                    }
                }
            },
            {
                test: /\.css$/,
                exclude:'/asset/',
                use: ['style-loader','css-loader','postcss-loader']
            },
            {
                test: /\.scss$/,
                exclude:'/asset/',
                use: ['style-loader','css-loader','sass-loader','postcss-loader']
            },
            {
                test: /\.less$/,
                exclude:'/asset/',
                use: [{loader: 'style-loader'},
                    {loader:'css-loader',options:{ sourceMap: true }},
                    {loader:'less-loader',options:{ sourceMap: true }},
                    {loader:'postcss-loader'}]
            },
            {
                test: /\.jsx?$/,
                exclude:'/node_modules/',
                use: [{
                    loader: 'babel-loader',
                }],
            }
        ],
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            template: './index.html',
            // 自动将引用插入html
            inject: true,
            // 生成出来的html文件名
            filename: 'index.html',
        }),
        // new HTMLWebpackPlugin({
        //     template: './login.html',
        //     // 自动将引用插入html
        //     inject: true,
        //     // 生成出来的html文件名
        //     filename: 'login.html',
        // }),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname,'../asset'),
                to: path.resolve(__dirname, '../dist/asset'),
                ignore: ['.*']
            },
        ]),
    ],
    // 优化模块
    optimization: {   // 优化打包 没有使用的方法 不会打包  只对export 引用的方法管用
        usedExports: true,
        // 帮我们自动实现代码分割
        splitChunks: {
            chunks:"all",
            automaticNameDelimiter: '~',
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,//优先级 数字越大，优先级越高
                    filename: 'loash~[hash].js',// 对名字进行重制
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
              }
        }
    },

};