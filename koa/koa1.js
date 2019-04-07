var koa = require('koa');
let server = new koa();
let static = require('koa-static');


server.listen(8080);


// 接口
server.use(async function (req,res) {
});


// 静态文件
server.use(static('www'));

