const koa = require('koa');
const server = new koa();
const router = require('koa-router');
const mainRouter = router();

server.use(mainRouter.routes());



mainRouter.use('/user',require('./routers/user'));

server.listen('4444')
