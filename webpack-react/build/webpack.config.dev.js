const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

// 热更新插件
const webpack = require('webpack');
//拷贝文件夹
const CopyWebpackPlugin = require('copy-webpack-plugin');
// 删除文件
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
// console.log( typeof path.join(__dirname,'/asset'));
// webpack 文件合并
const merage = require('webpack-merge');
const commion = require('./webpack.commion');

// const HOST = process.env.HOST;
// console.log(env);
// console.log(process.env.prod)

const devConfig= {
    mode: 'development',
    devtool: 'cheap-Module-eval-source-map',
    plugins:[new webpack.HotModuleReplacementPlugin()],
    devServer:{
        contentBase: '../dist',
        open: false,
        port: '8081',
        hot: true,
    },
};
module.exports = merage(commion,devConfig)

