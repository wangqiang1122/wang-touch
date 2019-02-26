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
   if (!req.cookies['admin_token']&&url.parse(req.url).pathname !== '/login') {
      res.redirect(`/admin/login?ref=${req.path}`);
   } else {
       // 如果是token验证的话 需要在在数据库保存token 进入下一步之前需要查找是否有相对应的token
       if (url.parse(req.url).pathname === '/login') {
           next()
       } else {
           req.dbs.query(`SELECT * FROM admin_token_table WHERE ID='${req.cookies['admin_token']}'`,function (err,data) {
               console.log(data)
               if(err) {
                   res.status('500').send('报错了')
               } else if (data.length===0&&url.parse(req.url).pathname !== '/login') {
                   res.redirect(`/admin/login?ref=${url.path}`);
               } else {
                   req.admin_ID = data[0]['admin_ID'];
                   console.log('aaaaa');
                   console.log( req.admin_ID);
                   next()
               }
           });
       }
   }
});

router.get('/login',function (req,res) {
   res.render('login',{ error_msg: '' ,ref: req.query['ref']?req.query['ref']:''});
});

router.post('/login',function (req,res) {
    console.log(getIp(req))
   let { username,password } = req.body;
   const a = common.md5(password);
   let success = false;
   let err_msg = '';
    if (username ===config.name) {
        if (a===config.password){
           console.log('我是超级');
            err_msg = '超级管理员登陆成功';
            setToken('1')
            // res.redirect('/admin/house')
            //
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
                // req.session['admin_token'] = data[0].ID;
                console.log('我是普通用户')
                setToken(data[0].ID)
                err_msg = '普通用户登陆成功'
                // res.redirect('/admin/house')
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
    // 保存新增token
    function setToken(id) {
        // 登陆的时候生成一个token uuid生成
        const ID = common.uuid(); // uuid生成的token
        const time = new Date();
        time.setMinutes(time.getMinutes()+20);
        req.dbs.query(`DELETE FROM admin_token_table WHERE admin_ID='${id}'`,err=>{
           if (err){
               console.log(err);
           }
        });
        // 把id放到数据库li(登陆之后进行ID更新)
        req.dbs.query(`INSERT INTO admin_token_table(ID,admin_ID,expires) VALUES('${ID}','${id}',${time.getTime()/1000})`,err=>{
            if (err) {
                console.log('数据报错');
                console.log(err);
                res.status('500').send('404');
            } else {
                res.cookie('admin_token',ID,{
                    // expires: time,
                });
                let ref = '';
                if (!req.query['ref']){
                    ref = '/house'
                } else {
                    ref = req.query['ref'];
                }
                console.log(req.query['ref']);
                res.redirect(`/admin${ref}`)
            }
        });
    }
});
router.get('/aaa',function (req,res) {
    // req.session = null; // 删除session
    res.clearCookie('admin_token');
    res.send('aaaa');
    res.end();
});
router.get('/house',function (req,res) {
    req.dbs.query('SELECT ID,title,ave_price,tel FROM house_table',(err,data)=>{
        res.render('index',{data:data});
    });
});
router.post('/house',function (req,res) {
    // console.log(req.body);
    // console.log(req.files);
    console.log(req['admin_ID']);
    let ImgPath = [];
    let ImgrealPath = [];
    req.body['sale_time'] = new Date(req.body.sale_time).getTime()/1000;
    req.body['submit_time'] = new Date(req.body.submit_time).getTime()/1000;
    req.files.forEach((item) => {
        switch (item.fieldname) {
            case 'main_img':
                req.body['main_img_path'] = item.filename;
                req.body['main_img_real_path'] = item.path;
                break;
            case 'img1':
                ImgPath.push(item.filename);
                ImgrealPath.push(item.path);
                break;
            case 'property_img':
                req.body['property_img_paths'] = item.filename;
                req.body['property_img_real_paths'] = item.path;
        }
    })
    req.body['ID'] = common.uuid();
    req.body['admin_ID'] = req.admin_ID;
    req.body['img_paths'] = ImgPath.join(',');
    req.body['img_real_paths'] = ImgrealPath.join(',');
    let arrFile = [];
    let arrfileValue = [];
    for (var i in req.body){
        arrFile.push(i);
        arrfileValue.push(req.body[i]);
    }
    let sql = `INSERT INTO house_table (${arrFile.join(',')}) value('${arrfileValue.join("','")}')`
    req.dbs.query(sql,function (err) {
        console.log(err)
        if (!err) {
            res.redirect('/admin/house')
        }
    });
    console.log(sql)
});

// 删除
router.get('/house/delete',(req,res)=>{
    console.log(req.query);
});
// 获取客户端ip
function getIp(req) {
    return req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress || '';
}