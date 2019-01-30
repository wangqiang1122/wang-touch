var crypto  = require('crypto');
let hash = crypto.createHash('md5');
hash.update('asd');
hash.update('fff');
console.log(hash.digest('hex'));