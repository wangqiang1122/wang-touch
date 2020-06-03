let router = require('koa-router');
const router2 = router()


router2.use((ctx,next)=>{
    // ctx.set('Access-Control-Allow-Origin','*');
    // ctx.res.setHeader('Access-Control-Allow-Origin','*')
    // ctx.set('Content-Type', 'text/html');
    // ctx.res.writeHead(200, {
    //     'Access-Control-Allow-Origin': 'http://localhost:63342',
    //     'Access-Control-Allow-Methods': 'POST,GET,OPTIONS,DELETE',
    //     'Content-Type':'text/html;charset=utf-8',
    //     'Access-Control-Allow-Headers': 'x-requested-with,content-type,token',
    //     'Access-Control-Allow-Credentials': true,
    // });

    next()
});
router2.get('/get', async (ctx,next)=>{
    console.log(ctx.header)
    ctx.stauts = 200;
    ctx.body = { 'name': '网', age: 'dddd' };
});


module.exports = router2.routes()  //router2.routes()
