const Router = require('koa-router');
const router = new Router();
const jwt = require('jsonwebtoken');
const jwtAuth = require('koa-jwt');
const secret = 'its a secret'; // token加密秘要


// router.use((ctx,next)=>{
//     // ctx.set('Access-Control-Allow-Origin', 'http://localhost:63342');
//     // ctx.set('Access-Control-Allow-Credentials', true); // 跨域是否允许携带请求头
//     // ctx.set('Access-Control-Allow-Methods', 'OPTIONS,GET,POST,PUT'); // 如需跨域的方法
//     // ctx.set('Access-Control-Allow-Headers', 'token,Authorization'); // 跨域允许请求头携带的自定义参数
//     next();
// });

router.post('/tokenLogin',async (ctx)=>{
    const { body } = ctx.request;
    console.log(body);
    ctx.stauts = 200;
      ctx.body= {
          code: '1',
          message: '登陆成功',
          token: jwt.sign({
              data: 'ddddd',
              exp: Math.floor(Date.now()/1000)+60*60,
          },secret)
      }
});

router.get('/tokenLoginOut',()=>{});

router.get('/tokengetUser',jwtAuth({ secret }), async ctx=>{ // 确认是否合法
    console.log(ctx.state);
    ctx.stauts = 200;
    ctx.body = {
        message: "获取数据成功",
        s : 's'
    };

});

module.exports = router.routes();