var app = require('express');
var server = app();
var mysql = require('mysql');
const dbs = mysql.createPool({host: 'localhost', port: '3306', user: 'root', password: '12345678', database:'20190131'});

server.listen(8080);
server.get('/reg',function (req,res,next) { // 判断 是否符合规则
    let { name, password } = req.query;
    console.log(/^\w{6,32}$/.test(password))
    if (!name) {
        res.send({code:1,msg:'姓名不能唯空' });
    } else if (!password) {
        res.send({code:1,msg:'密码不能唯空' });
    } else if(!/^\w{6,}$/.test(password)) {
        res.send({code:1,msg:'密码不符合规范' });
    } else {
       next()
    }

});
server.get('/reg',function (req,res,next) { // 数据中是否有重名的
    let { name, password } = req.query;
    dbs.query(`SELECT * FROM user where name='${name}'`,(err,data)=>{
       if (err) {
           res.send({code:1,msg:'数据库报错' });
           console.log(err)
       } else if (data.length!==0){
           res.send({code:1,msg:'有重名' });
       } else {
           next()
       }
    })
});
server.get('/reg',function (req,res) { // 写入数据库
    let { name, password } = req.query;
    dbs.query(`INSERT into user (name,password) values('${name}', '${password}')`,(err)=>{
        if (err) {
            console.log(err)
            res.send({code:1,msg:'数据库写入失败' });
        } else {
            res.send({code:0,msg:'数据库写入成功·' });
        }
    })
});

