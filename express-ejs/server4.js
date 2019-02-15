const express = require('express');
const consolidate = require('consolidate');
const mysql = require('mysql');
const fs = require('fs');
const ejs = require('ejs');
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
    fs.stat('./cahce/4',err => {
        if (err){
            console.log('没有')
            a()
        } else {
            let rs = fs.createReadStream('./cahce/4');
            rs.pipe(res)
            rs.on('error',function () {
                console.log('不存在')
                a()
            })
        }
    });

    function a() {
        dbs.query('SELECT id,name FROM user',(err,data)=>{
            if (err) {
                res.status(404).send('数据库错误啦！！！！');
            } else {
                // 缓存到本地·
                ejs.renderFile('./telemple/4.ejs',{ arr:data,head:['国际','啊哈哈','新闻']},(err,data)=>{
                    fs.writeFile('./cahce/4',data,'utf-8',err=>{
                        console.log(err)
                    })
                    res.send(data);
                    res.end()
                })
            }
        })
    }

});