var http = require('http');
var url = require('url');
var fs = require('fs');
let router1 = require('./router');
let login = require('./login')
let zlib = require('zlib');
let server = http.createServer((request,response)=>{
    let { pathname, query } = url.parse(request.url,true);
    let gzip = zlib.createGzip();
    response.send=function (a) {
        if (typeof a !=='string') {

        }
    };
    if (router1.emit(pathname,query,response)) { // 有接口

    } else {                            // 没有接口静态资源
        console.log(pathname)
        if (pathname==='/favicon.ico') {

        }else {
            response.setHeader('Content-Encoding','gzip');
            let rs = fs.createReadStream('./www'+pathname); //createReadStream
            rs.pipe(gzip).pipe(response);
            rs.on('error',()=>{
                // response.writeHeader(404);
                console.log('把偶哦')
                response.write('404')
                response.end();
            })
        }
    }
    // response.setHeader('Content-Encoding','gzip');
    // let rs = fs.createReadStream('./www'+pathname); //createReadStream
    // console.log(pathname)
    // rs.pipe(gzip).pipe(response);
    // rs.on('error',()=>{
    //     response.writeHeader(404);
    //     console.log('把偶哦')
    //     response.write('404')
    //     response.end();
    // })

});
server.listen('2222');