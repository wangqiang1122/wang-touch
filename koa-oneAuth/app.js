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
    switch (ctx.request.host) {
        case 'www.ccc.com:2222':
            ctx.set('Content-Type', 'text/html');
            const bodyc = await faFileRead(`./www_ccc${pathname}`);
            ctx.response.sendStatus = 200;
            ctx.response.body = bodyc;
            break;
        case 'www.bbb.com:2222':
            ctx.set('Content-Type', 'text/html');
            const bodyb = await faFileRead(`./www_bbb${pathname}`);
            ctx.response.sendStatus = 200;
            ctx.response.body = bodyb;
            break;
        case 'www.oneauth.com:2222':
            // ctx.res.setHeader('Access-Control-Allow-Origin','*');
            // ctx.set('Access-Control-Allow-Origin','*')
            // ctx.res.writeHead( 200,{
            //     'Access-Control-Allow-Origin':'*'
            // });
            ctx.res.setHeader('Access-Control-Allow-Origin','*');
            ctx.status = 200;
            let user = {
                blue: { password: 123456, token: '37253e65383c42c8a0a831473f7b6260', age:'222' },
                qiang: { password: 123456, token: '218cb4b55afc4903beb7e10ce0e473f5',age: '2222' },
            };
            const { name,password,src} = ctx.request.query;
            switch (pathname) {
                case '/login':
                    console.log(ctx.request.query);
                    if (user[name]) {
                        // ctx.response.body = { code: 1,  message: '有的'};
                        ctx.response.body = '有这个人，但是密码错误'
                        if (password == user[name].password) {
                            console.log('进来了')
                            // ctx.response.body = { code: 2,  message: '有这个人', token: user[name].token };
                            ctx.redirect(`${src}?token=${user[name].token}`);
                        }
                    } else {
                        // ctx.response.body = { code: 0,  message: '错的'};
                        ctx.response.body = '没有这个人'
                    }
                    break;
                default:
                    ctx.response.sendStatus = 200;
                    ctx.response.body = '错误页面';
            }


    }
});
