const koa = require('koa');
const server = new koa();
const router = require('koa-router');

const router1 = router();
router1.get('/reg/:a/:b',async (ctx,next)=>{
  console.log(ctx.query)
  console.log(ctx.params)
});
server.use(router1.routes())
server.listen('3333');
