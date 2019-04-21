var koa = require('koa');
let server = new koa();
const Mystatic = require('./libs/lib');


// static
// 1 缓存
// 2 压缩问题 判断浏览器支不支持压缩
// 3 读取的问题

// ctx.request.url包括?后面的参数
// ctx.request.path 纯路径
// ctx.request和ctx.req 有什么区别
// ctx.req 没有扩展出来的一些方法是 原生node的自带request 比如 ctx.req.query
// ctx.request 有原生的一些方法也有扩展出来的一些方法  是koa封装过的  比如ctx.request.query;


server.use(Mystatic('www'));

server.listen('2233');
