const koa = require('koa');  // cookies 签名
const server = new koa();
server.listen('2222');
server.keys = [   // 签名钥匙
    '1111',
    '2222'
];
server.use(async (ctx)=>{
   // ctx.cookies.set('name','jahah',{ maxAge: 24*3600*1000,signed: true });
   console.log(ctx.cookies.get('name'));// 获取没有验证的签名
   // 需要验证签名的 获取cookie
    console.log(ctx.cookies.get('name',{ signed: true}))  // 如果前端去改cookie 会把签名删掉 强制
});
