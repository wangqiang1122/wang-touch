const koa = require('koa');
const Router = require('koa-router');
const b = require('koa-bodyparser');

const router = new Router();
const app = new koa();

app.use(b());
app.use(router.routes()).use(router.allowedMethods());

app.use((ctx,next)=>{
    ctx.set('Access-Control-Allow-Origin', 'http://localhost:63342');
    ctx.set('Access-Control-Allow-Credentials', true); // 跨域是否允许携带请求头
    ctx.set('Access-Control-Allow-Methods', 'OPTIONS,GET,POST,PUT'); // 如需跨域的方法
    ctx.set('Access-Control-Allow-Headers', 'token,Authorization'); // 跨域允许请求头携带的自定义参数
    next();
});

router.use('/a',require('./routers/token'));






app.listen('5555')