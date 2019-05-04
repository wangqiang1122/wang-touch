const koa = require('koa');
const server = new koa();
server.listen('3333');

server.use(async (ctx,next)=>{
  console.log(ctx.request.query)
});
