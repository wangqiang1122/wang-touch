var koa = require('koa');
let server = new koa();
let static = require('koa-static');


server.use(async (ctx,next)=>{
   var time = new Date().getTime();
   await next()
   console.log(`处理页面用了多久${new Date().getTime()-time}s`)
})

server.listen('2233');
server.use(static('www'))
