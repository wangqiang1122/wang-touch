const express = require('express');
const router = express.Router();
const url = require('url');
const common = require('../libs/common'); // 加密用
const config = require('../config'); // 配置文件
router.get('/',function (req,res) {
   res.send('admin');
   res.end();
});
module.exports= router;
// 所有admin路径的页面 都要进行登陆验证 如果没有验证的都要去重新登陆

router.use((req,res,next)=>{
   if (!req.session['admin_id']&&url.parse(req.url).pathname !== '/login') {
      console.log('重定向')
      res.redirect('/admin/login')
   } else {
       next()
   }
});

router.get('/login',function (req,res) {
   res.render('login',{ error_msg: '' ,ref: ''});
});

router.post('/login',function (req,res) {
   let { username,password } = req.body;
   const a = common.md5(password);
   let success = false;
   let err_msg = '';
    if (username ===config.name) {
        if (a===config.password){
           console.log('我是超级');
            err_msg = '超级管理员登陆成功';
            req.session['admin_id'] ='1';
            res.redirect('/admin/house')
        } else {
            console.log('报错了')
            err_msg = '用户名密码错误';
            showError(err_msg)
        }
    } else {
       // 普通用户
       req.dbs.query(`SELECT * FROM admin_table WHERE username='${username}'`,(err,data)=>{
         if (err) {
             err_msg = '数据库错误'
             showError(err_msg)
         } else if(data.length===0) {
             console.log('用户名密码错误1')
             err_msg = '用户名密码错误1'
             showError(err_msg)
         } else {
            if (data[0].password===common.md5(password)){
                req.session['admin_id'] = data[0].ID;
                success = true;
                err_msg = '普通用户登陆成功'
                res.redirect('/admin/house')
            } else {
                console.log('用户名密码错误2')
                err_msg = '用户名密码错误2'
                showError(err_msg)
            }
         }
       });
    }
    function showError(msg) {
        res.render('login',{ error_msg: msg ,ref: ''});

    }
});
router.get('/aaa',function (req,res) {
    req.session = null;
    res.send('aaaa');
    res.end();
});
router.get('/house',function (req,res) {
    req.dbs.query('SELECT ID,title,ave_price,tel FROM house_table',(err,data)=>{
        console.log(data)
        res.render('index',{data:data});
    });
});