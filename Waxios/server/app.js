const koa = require('koa');
const server = new koa();
const router = require('koa-router');
const mainRouter = router();

server.use(async (ctx,next)=>{
    ctx.set('Access-Control-Allow-Origin', 'http://localhost:63342');
    ctx.set('Access-Control-Allow-Credentials', true);
    if ( ctx.method.toUpperCase() === 'OPTIONS' ) {
        console.log('发送了非简单请求');
        ctx.set('Access-Control-Allow-Methods', 'OPTIONS,GET,POST,PUT');
        ctx.set('Access-Control-Allow-Headers', 'x-name,content-type,token');
        // ctx.set('Access-Control-Allow-Headers', 'content-type');
        ctx.set('Access-Control-Max-Age', '-1');
        return ctx.body = '';
    }
    await next();
})

server.use(mainRouter.routes());

mainRouter.use('/login', require('./a'));

server.listen('2222');
