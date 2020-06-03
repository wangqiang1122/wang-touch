const koa = require('koa');
const server = new koa();
const router = require('koa-router');
const mainRouter = router();

server.use(async (ctx,next)=>{
    ctx.set('Access-Control-Allow-Origin', 'http://localhost:63342');
    // ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Credentials', true); // 跨域是否允许携带请求头
    if ( ctx.method.toUpperCase() === 'OPTIONS' ) {
        console.log('发送了非简单请求');
        ctx.set('Access-Control-Allow-Methods', 'OPTIONS,GET,POST,PUT'); // 如需跨域的方法
        ctx.set('Access-Control-Allow-Headers', 'x-name,content-type,token'); // 跨域允许请求头携带的自定义参数
        // ctx.set('Access-Control-Allow-Headers', 'content-type');
        ctx.set('Access-Control-Max-Age', '-1'); // 用来指定本次预检请求的有效期，单位为秒
        return ctx.body = '';
    }
    await next();
})

server.use(mainRouter.routes());

mainRouter.use('/login', require('./a'));

server.listen('2222');
