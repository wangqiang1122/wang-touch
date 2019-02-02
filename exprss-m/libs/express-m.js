const http = require('http');
const url = require('url');
const assert = require('assert'); // 断言


module.exports = function () {
  let queue = [];
  let server = http.createServer(function (req,res) {
      let { pathname,query } = url.parse(req.url,true);
      req.query = query;
      req.send=(data)=>{
        if (data instanceof Buffer || typeof data ==='string') {
            res.write(data)
        } else {
            res.write(JSON.stringify(data))
        }
          res.end()
      };
      __next(0);
      function __next(n) {
          for (var a=n; a<queue.length;a++){
              console.log(n)
           if ((pathname === queue[a].path)||(queue[a].path==='*')){
               queue[a].fn(res,req,() => {
                   __next(n+1);
               });
               break;
           }
          }
      }

  });
    server.get=function () {
        let path,fn;
        assert(arguments.length ===2||arguments.length ===1,'error 需要传值');
       if (arguments.length ===2) {
           path = arguments[0];
           fn = arguments[1];

       }else if( arguments.length ===1) {
           path = '*';
           fn = arguments[0];
       }
        console.log(1)
       queue.push({ path,fn });
    };


    return server
};