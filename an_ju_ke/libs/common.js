var crypto  = require('crypto');
const uuid = require('uuid/v4');
module.exports = {
    md5:function (val) {
        const hash = crypto.createHash('md5');
        const md5 = hash.update(val);
        return md5.digest('hex');
    },
    uuid() {
       let a = uuid();
       return a.replace(/-/g,'')
    },
};