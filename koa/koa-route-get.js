var koa =require('koa');
var server  = new koa();
var route = require('koa-route');


server.use(route.get('/reg/:name/:user', async (ctx,name,user,next)=>{
    console.log(name);
    console.log(user);

    console.log(ctx.query);

}));

server.listen('2222')
