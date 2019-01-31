let cluster = require('cluster');
const os = require('os');
if (cluster.isMaster){
    for (var a = 0;a<os.cpus().length;a++){
        cluster.fork()
    }
    console.log('主进程')
} else {
    console.log('工作进程')
}