const mysql = require('koa-mysql');

exports.createPool = function (json) {
    let dbs = mysql.createPool(json);
    dbs._query = dbs.query.bind(dbs);
    dbs.query= function (str) {
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

    return dbs

};