const koa = require('koa');
const server = new koa();
const url = require('url');
const fs = require('fs');
server.listen('2222');

function faFileRead(path) {
    return new Promise((resolve,reject)=>{
        fs.readFile(path,(err,data)=>{
            resolve(data)
        })
    });
}

server.use(async (ctx,next)=>{
    const { pathname } = url.parse(ctx.request.url);
    console.log(ctx.request.host);
    ctx.set('Content-Type', 'text/html');
    switch (ctx.request.host) {
        case 'www.ccc.com:2222':
            const bodyc = await faFileRead(`./www_ccc${pathname}`);
            ctx.response.sendStatus = 200;
            ctx.response.body = bodyc;
            break;
        case 'www.bbb.com:2222':
            const bodyb = await faFileRead(`./www_bbb${pathname}`);
            console.log(body);
            ctx.response.sendStatus = 200;
            ctx.response.body = body;
            break;
        case 'www.oneAuth.com:2222':
            break;
        default:
            ctx.response.sendStatus = 200;
            ctx.response.body = '错误页面';

    }
});
