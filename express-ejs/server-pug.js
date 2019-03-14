const express = require('express');
const consolidate = require('consolidate');
const mysql = require('mysql');
const pug = require('pug');
const dbs = mysql.createPool({host: 'localhost', port: '3306', user: 'root', password: '12345678', database:'20190131'});
const app = express();
app.listen('1111');

// 1 选择一种模版引擎
app.engine('html',consolidate.pug);

// 2 指定模版文件的扩展名
app.set('view engine','pug');

// 3 指定模版文件的路径
app.set('views','./telemplate_pug');

app.get('/',function (req,res) {

    res.render('1',{ arr:[1,23,4],a:1,b:2,pretty: true })
    // dbs.query('SELECT id,name FROM user',(err,data)=>{
    //     if (err) {
    //         res.status(404).send('数据库错误啦！！！！');
    //     } else {
    //         res.render('4',{ arr:data,head:['国际','啊哈哈','新闻']});
    //     }
    // })
});