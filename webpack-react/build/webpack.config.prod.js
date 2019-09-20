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

const prodConfig = {
    mode: 'production',
    devtool: 'cheap-Module-source-map',
};
module.exports = env => {
    console.log(process.env.prod)
    return merage(commion,prodConfig)
};