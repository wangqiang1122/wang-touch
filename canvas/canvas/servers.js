var http = require('http');
var url = require('url');
var fs = require('fs');
var uuid = require('uuid/v4');
var httpserver = http.createServer(function (req,res) {
  let str = '';
  let { pathname } = url.parse(req.url,true);
  if (pathname==='/reg') {
      req.on('data',function (chunk) {
          str+=chunk
      });
      req.on('end',function () {
         // fs.writeFile('./upload')
          console.log(decodeURIComponent(str));
          let a = decodeURIComponent(str).split(',')[1];
          fs.writeFile(`./upload/${uuid()}.png`, a, 'base64',function (err) {
              if (err) {
                  res.write(JSON.stringify({code:-1, msg:'失败'}))
                  res.end();
              } else {
                  res.write(JSON.stringify({code:200, msg:'成功'}))
                  res.end();
              }
          })
      })
  }
});

httpserver.listen(1111);