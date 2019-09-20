const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

// 热更新插件
const webpack = require('webpack');
//拷贝文件夹
const CopyWebpackPlugin = require('copy-webpack-plugin');
// 删除文件
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
// console.log( typeof path.join(__dirname,'/asset'));

module.exports = {
    entry: './main.js',
    output: {
        path: path.resolve(__dirname,'./dist'), //resolve
        filename: '[name]_[hash].js'
    },
    mode: 'development',
    // mode: 'production',
    devtool: 'cheap-Module-eval-source-map',
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
        }),
        new webpack.HotModuleReplacementPlugin(),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname,'./asset'),
                to: path.resolve(__dirname, './dist/asset'),
                ignore: ['.*']
            },
        ]),
    ],
    devServer:{
        contentBase: './dist',
        open: false,
        port: '8081',
        hot: true,
    },
    // 优化模块
    optimization: {   // 优化打包 没有使用的方法 不会打包  只对export 引用的方法管用
        usedExports: true
    }
};