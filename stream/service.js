const http = require('http');
const url = require('url');
const fs = require('fs');
const zlib = require('zlib'); // 压缩
http.createServer(function (req,res) {
    const { pathname,query } = url.parse(req.url,true);
    let gz = zlib.createGzip();
    res.setHeader('Content-Encoding','gzip');  // 浏览器 返回头 写入解析头
    if (pathname==='/favicon.ico')return;
    console.log(pathname);
    let rs = fs.createReadStream(`../www${pathname}`); // createReadStream读取流操作

    rs.pipe(gz).pipe(res); // pipe 管道写入流操作
    console.log(`../www${pathname}`)
    rs.on('error',err=>{
        console.log(err);
        res.setHeader('content-Encoding','plain');
        res.write('not found')
        res.end();
    });
}).listen('5566');
