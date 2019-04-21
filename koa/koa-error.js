var koa = require('koa');
let server = new koa();
let static = require('koa-static');


server.use(async (ctx,next)=>{
    console.log('1');
    for(var a =0;a<10;a++){
        await next()
    }
    console.log('2')
})

server.use(async (ctx,next)=>{
   console.log('a')
});
server.listen('2233')
