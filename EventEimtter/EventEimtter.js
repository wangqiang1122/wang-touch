const event = require('events').EventEmitter;
let ev = new event();  // 队列可以解耦合 不关系谁去接受 有几个人接受 接收去干嘛
console.log(ev)

ev.on('blur',function (a,b) {
    console.log(a,b)
});
ev.emit('blur',1,2);
