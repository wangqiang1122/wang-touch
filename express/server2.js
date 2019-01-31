var app = require('express');
var server = app();

server.listen(8080);
server.get('/a',function (req,res,next) {  // 中间件 next  流水线作业
    console.log('1')
    next()
});
server.get('/a',function (req,res,next) {
    console.log('2')
});

