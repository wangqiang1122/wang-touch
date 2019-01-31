let cluster = require('cluster'); // 可以复制进程
const os = require('os');
const process = require('process'); // 查看进程
if (cluster.isMaster){
    for (var a = 0;a<os.cpus().length;a++){
        cluster.fork()
    }
    console.log('主进程')
} else {
    console.log('工作进程'+process.pid)
}