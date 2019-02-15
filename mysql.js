let mysql = require('mysql');
// let db = mysql.createConnection({host: 'localhost', port: 3306, user: 'root', password: 12345678, database:'20171116'}); // 创建一个链接
let db = mysql.createPool({host: 'localhost', port: '3306', user: 'root', password: '12345678', database:'20181116'}); // 创建一个链接池
//maxconnection 创建几个链接池 默认是10个链接
db.query('SELECT * FROM user_table', function (err ,data) {
    console.log(err);
    console.log(JSON.stringify(data));
});