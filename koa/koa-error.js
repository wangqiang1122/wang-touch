var koa = require('koa');
let server = new koa();
let static = require('koa-static');



// koa --可以统一处理error 报错
server.use(async (ctx,next)=>{
    try {
        await next()
    } catch (e) {
        ctx.response.body = '404'
    }
})

server.listen('2233')
