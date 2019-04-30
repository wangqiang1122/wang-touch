const Mykoa = require('./my-koa');
const server = new Mykoa();



server.listen('5555')
server.use(async function (ctx,next) {
  console.log(1);
  await next(); // 需要一个返回
  console.log(3)
});
server.use(async function (ctx,next) {
    console.log(2);
    await next(); // 需要一个返回
    console.log(4)
});