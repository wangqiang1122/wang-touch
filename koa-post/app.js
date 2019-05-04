const koa = require('koa');
const server = new koa();
const body = require('koa-better-body');
const convert = require('koa-convert'); // 转换
server.listen('3333');

server.use(convert(body()));

server.use(async (ctx)=>{
    console.log(ctx.request.body); // 是buffer数据  一堆
    console.log(ctx.request.files); // 文件数据
    console.log(ctx.request.fields); // 数据 (包括文件)
})
