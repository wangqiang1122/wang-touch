let os = require('os');
let arr = os.cpus();
//console.log(os.cpus())
//console.log(os.freemem()/1024/1024) // 还有多少缓存
console.log(os.loadavg()) // 系统负载