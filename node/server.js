var http =require('http');
var url = require('url');
var querysgring = require('querystring');

var serverhttp = http.createServer(function (requset,responens) {
    // console.log(url.parse(requset.url,true))


    // 接受urlencoded 的post数据 需要连接buffer数据
    var str= [];
    requset.on('data',function (data) {
        str.push(data)
    });
    requset.on('end',function () {
        var a = Buffer.concat(str).toString();
        querysgring.parse(a)
        console.log(querysgring.parse(a))

    })
});

serverhttp.listen(2222);
