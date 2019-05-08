const mysql = require('koa-mysql');

exports.createPool = function (json) {
    const dbs = mysql.createPool(json);
    dbs._query = dbs.query;
    dbs.query = function (str) {
        console.log(str)
        return new Promise((resolve,reject)=>{
            dbs._query(str)((err,data)=>{
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        })
    };

    return dbs;
};
