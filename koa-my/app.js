const Mykoa = require('./my-koa');
const server = new Mykoa();


server.listen('5555')

// server.use(async function (ctx,next) {
//   console.log(1);
//   await next(); // 需要一个返回
//   console.log(3)
// });
// server.use(async function (ctx,next) {
//     console.log(2);
//     // await new Promise((resolve,reject)=>{
//     //     setTimeout(()=>{
//     //         resolve()
//     //     },1000)
//     // }); // 需要一个返回
//     await next();
//     console.log(4)
// });
// server.use(async function (ctx,next) {
//     console.log(5);
// });


server.use(function (ctx,next) {
    console.log(1);
    next()
    console.log(3)
});
server.use(async function (ctx,next) {
    console.log(2);
    console.log(4)
    next()
});
server.use(async function (ctx,next) {
    console.log(5);
});

