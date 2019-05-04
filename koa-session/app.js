const koa = require('koa');
const server = new koa();
const session = require('koa-session');
server.keys = ['2222','3333'];
server.use(session({ maxAge: 20*60*1000},server)); //koa-session 无法做关闭页面自动消除 所以只能做一个过期时间
server.listen(4444);
server.use(async (ctx)=>{
    if (!ctx.session['n']) {
        ctx.session['n'] =1 ;
    } else {
        ctx.session['n']++
    }
    console.log(ctx.session)
});
