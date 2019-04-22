var koa = require('koa');
let server = new koa();
let static = require('koa-static');


server.listen(8080);


// 接口
// server.use(async function (req,res) {
// });


// 静态文件
server.use(static('www'));
///key = key.replace(/<\/?.+?>/g,""); // （前面要有)< (一个或者0个)/ 任意字符(最少一个多则不限)  >(后面有一个)

