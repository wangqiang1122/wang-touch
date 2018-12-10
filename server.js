let http = require('http');
let io = require('socket.io');
let httpserver = http.createServer();
httpserver.listen(9999);



let wsServer = io.listen(httpserver);

wsServer.on('connection',function (sock) {
    sock.on('msg',function (...arg) {
        console.log(...arg);
    })
});