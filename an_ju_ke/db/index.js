const mysql = require('mysql');
// 配置文件
const config = require('../config');

// 数据库池
const dbs = mysql.createPool({
    host:config.mysql_host,
    password:config.mysql_password,
    port: config.mysql_port,
    user:config.mysql_user,
    database: config.mysql_database
});
module.exports = {

};