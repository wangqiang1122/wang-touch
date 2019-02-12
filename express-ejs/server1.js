const express = require('express');
const consolidate = require('consolidate');
const app = express();
app.listen('1111');

// 1 选择一种模版引擎
app.engine('html',consolidate.ejs);

// 2 指定模版文件的扩展名
app.set('view engine','ejs');

// 3 指定模版文件的路径
app.set('views','./telemple');

app.get('/',function (req,res) {
    res.render('3',{ arr:[
        {name:'ahah',age:'111',sex:'男'},
        {name:'李四',age:'22',sex:'男'},
        {name:'小红',age:'22',sex:'女'}
        ] });
});