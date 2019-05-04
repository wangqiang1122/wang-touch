const koa = require('koa');
const server = new koa();
const body = require('koa-better-body');
const convert = require('koa-convert'); // 转换
const path = require('path');
server.listen('3333');

server.use(convert(body({
    uploadDir: './upload/',
    keepExtensions: true, // 保留扩展名
})));

server.use(async (ctx)=>{
    // console.log(ctx.request.body); // 是buffer数据  一堆
    // console.log(ctx.request.files); // 文件数据
    console.log(ctx.request.fields); // 数据 (包括文件)   //一般用这个
    console.log(path.extname(ctx.request.fields.f1[0].name))  // 获取扩展名
})
