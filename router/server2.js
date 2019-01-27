let http  = require('http');
let server = http.createServer((res,req)=>{
    req.write('hahahah');
    req.end();
});
server.listen('4444');
