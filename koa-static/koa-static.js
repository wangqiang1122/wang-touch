var koa = require('koa');
let server = new koa();


// static
// 1 缓存
// 2 压缩问题 判断浏览器支不支持压缩
// 3 读取的问题

server.use(async (ctx)=>{

});

server.listen('2233');
