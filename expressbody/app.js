var server = require('express');
const bodyParser = require('body-parser'); // 和原生node的 querystring 依赖的效果一样
var app = server();
app.listen('6060');
//返回的对象是一个键值对，当extended为false的时候，键值对中的值就为'String'或'Array'形式，为true的时候，则可为任何数据类型。
// app.use(bodyParser.urlencoded({ extended: false }))
app.use((req,res,next)=>{
    var str = '';
    req.on('data',(data)=>{
        str+=data
    })
    req.on('end',function () {
        console.log(str);
    })
});  // 无论什么方法 如get post put  无论什么路径 都要走这个方法
app.post('/b',function (req,res) {
    console.log(req.body);
})