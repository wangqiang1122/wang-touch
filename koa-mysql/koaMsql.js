const mysql = require('mysql');

module.exports = {
    createConnection: function (json) {
        const dbs = mysql.createConnection(json);
        dbs._query = dbs.query;
        dbs.queryC = function (str) {
            return new Promise((resolve, reject) => {
                dbs._query(str, (err, data) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(data)
                    }
                })
            })
        };
        return dbs;
    }
}
