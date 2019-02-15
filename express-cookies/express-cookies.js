const express = require('express');
const cookies = require('cookie-parser');
const app = express();
console.log(cookies)
app.listen('2222');
app.use(cookies(['dasdas','231231','75675']));
app.get('/',function (req,res) {
    console.log(req.cookies);
    console.log(req.signedCookies)
    res.cookie('pass','dddddd',{
        signed:true // 经过签名 防止用户篡改
    })
    res.cookie('name','wang')
    res.end('ddddd')
});
