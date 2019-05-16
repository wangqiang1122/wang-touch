const koa = require('koa');
const server = new koa();
const mysql = require('./lib/koa-mysql');
const router = require('koa-router');
const dbs = mysql.createPool({ host: 'localhost', user: 'root', password: '12345678',database: 'an_ju_ke'})

server.listen('3333');
let r1 = router();
// server.use(async ()=>{
//     var a = await dbs.query('SELECT * from house_table');
//     console.log(a)
// });
server.use(async (ctx,next)=>{
    ctx.set('Access-Control-Allow-Origin','*')
    await next()
})
server.use(r1.routes());


r1.get('/api/house/page',async (ctx)=>{
    var a = await dbs.query('SELECT * from house_table');
    // ctx.res.setHeader('Access-Control-Allow-Origin','*');
    // ctx.res.writeHead('200',{
    //     'Access-Control-Allow-Origin':'*'
    // })
    ctx.body = a
});
r1.get('/api/house/page/:id',async ctx=>{
    let { id } = ctx.params;
    // ctx.set('Access-Control-Allow-Origin','*')
    var a = await dbs.query(`SELECT * from house_table where ID='${id}'`);
    ctx.body = a[0]
    console.log(a)
});