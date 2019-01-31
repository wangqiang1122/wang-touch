let cluster = require('cluster'); // 可以复制进程
const os = require('os');
const process = require('process'); // 查看进程
const fs = require('fs');
const url = require('url');
const http = require('http');
if (cluster.isMaster){
    for (var a = 0;a<os.cpus().length;a++){
        cluster.fork()
    }
    console.log('主进程')
} else {
  http.createServer((req,res)=>{
      console.log(process.pid)
      let { pathname, query } = url.parse(req.url, true);
      let rs = fs.createReadStream(`./www/${pathname}`);
      rs.pipe(res);
      rs.on('error',function () {
          res.writeHeader(404);
          res.write('not fount')
          res.end();
      })
  }).listen('2222')
}