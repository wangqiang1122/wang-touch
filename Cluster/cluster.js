let cluster = require('cluster');
if (cluster.isMaster){
    cluster.fork()
}
console.log('aaaaa')