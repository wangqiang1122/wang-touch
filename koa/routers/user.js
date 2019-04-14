const router = require('koa-router');
const router2 = router()

router2.get('/a',async  function (ctx,next) {
    console.log(ctx.query)
    ctx.body = 'saa'
});


module.exports = router2.routes();
