const koa = require('koa');
const server = new koa();
server.listen('2222');
server.use(async (ctx)=>{
   ctx.cookies.set('name','jahah',{ maxAge: 24*3600*1000, path:'/aaa' })
});
