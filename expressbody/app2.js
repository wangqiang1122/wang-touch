var server = require('express');
const bodyParser = require('body-parser'); // 和原生node的 querystring 依赖的效果一样
const querystring = require('querystring');
const urlencoded = require('urlencoded').a; // 自己写的中间件
var app = server();
app.listen('6060');
// app.use(bodyParser.urlencoded({ extended: false }))
app.use(urlencoded);  // 无论什么方法 如get post put  无论什么路径 都要走这个方法
app.post('/b',function (req,res) {
    console.log(req.body);
})
app.post('/a',function (req,res) {
    console.log(req.body);
})