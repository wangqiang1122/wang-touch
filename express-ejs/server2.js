const express = require('express');
const consolidate = require('consolidate');
const mysql = require('mysql');
const dbs = mysql.createPool({host: 'localhost', port: '3306', user: 'root', password: '12345678', database:'20190131'});
const app = express();
app.listen('1111');

// 1 选择一种模版引擎
app.engine('html',consolidate.ejs);

// 2 指定模版文件的扩展名
app.set('view engine','ejs');

// 3 指定模版文件的路径
app.set('views','./telemple');

app.get('/',function (req,res) {
    dbs.query('SELECT id,name FROM user',(err,data)=>{
        console.log(data)
    })
    res.render('3',{ arr:[
        {name:'ahah',age:'111',sex:'男'},
        {name:'李四',age:'22',sex:'男'},
        {name:'小红',age:'22',sex:'女'}
        ] });
});