const express = require('express');
const app = express();
const ejs = require('ejs');
const consolidata = require('consolidate'); // 服务端渲染模版适配器
const bodyparser = require('body-parser');//  获取数据post
const cookieSeesin = require('cookie-session');
const mysql = require('mysql');
const cookie = require('cookie-parser'); // 设置cookie
const multer = require('multer'); // 图片上传 文件post数据
const storage = multer.memoryStorage();
const uuid = require('uuid/v4');
// 配置文件
const config = require('./config');

// 数据库池
const dbs = mysql.createPool({
    host:config.mysql_host,
    password:config.mysql_password,
    port: config.mysql_port,
    user:config.mysql_user,
    database: config.mysql_database
});
app.listen(config.port);
// 把数据池里的
app.use((req,res,next)=>{
    req.dbs = dbs;
    next()
});

//multer
const multerobj = multer({dest: './upload'});
app.use(multerobj.any());
// bodyparser
app.use(bodyparser.urlencoded({ extended: false }));
// cookie
app.use(cookie(require('./serct/cook_key')));
// cookieSeesin
app.use(cookieSeesin({
 keys: require('./serct/sess_key'),
}));

// 选择一种模版引擎
app.engine('html', consolidata.ejs);
// 指定模版文件的扩展名
app.set('view engine', 'ejs');
// 指定模版的文件路径ad
app.set('views','./temeplate');

// 路由
// 管理员
app.use('/admin',require('./router/admin_router'));

// 跟路径
app.use('/',require('./router/www_router'));

// 静态文件托管管理
app.use(express.static('./www'));


