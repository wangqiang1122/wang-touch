var http = require('http');
var url = require('url');
var fs = require('fs');
let router1 = require('./router');
let login = require('./login')
let zlib = require('zlib');
let server = http.createServer((request,response)=>{
    let { pathname, query } = url.parse(request.url,true);
    let gzip = zlib.createGzip();
    request.query = query;
    response.send=function (a) {
        response.writeHead( 200,{
            'content-type':'text/html;charset=utf-8'
        });
        if ((typeof a !=='string')&& !(a instanceof Buffer)) {
            a=JSON.stringify(a)
        }
            response.write(a)
            response.end();

    };

    if (true === router1.emit(pathname,request,response)) { // 有接口

    } else {                            // 没有接口静态资源
        let rs = fs.createReadStream('./www'+pathname); //createReadStream
        rs.on('end',function () {
            response.setHeader('Content-Encoding','gzip');
            rs.pipe(gzip).pipe(response);
        });
        rs.on('error',()=>{
            // response.writeHeader(404);
            console.log('把偶哦');
            response.writeHeader(404);
            response.write('not font')
            response.end();
        })
    }
});
server.listen('2222');
