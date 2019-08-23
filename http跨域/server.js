const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{
   let { method, url } = req;
   console.log(method)
   if (method==='GET'&&url==='/') {
       fs.readFile('./index.html',(err, data)=>{
          res.setHeader('Content-Type','text/html');
          res.end(data);
       });
   } else if(method==='GET'&&url==='/user') {
       res.setHeader('Content-Type','application/json');
       res.setHeader('Access-Control-Allow-Origin', '*');
       res.end(JSON.stringify({b:'2',d:'h4'}));
   }

});

server.listen(3000);