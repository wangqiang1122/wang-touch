var app = require('express');
var server = app();



server.get('/',(req,res)=>{
   res.send('我是get')
});
server.post('/',(req,res)=>{
    res.send('我是post')
});
server.use('/a',(req,res)=>{ // 我是通用版
    res.send('我是通用')
});

server.listen('8080');
// 静态文件

// up 中间件
server.use(app.static('./www/')); // 静态文件托管