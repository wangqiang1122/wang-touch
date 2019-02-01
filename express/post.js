const express = require('express');
const bodyparse = require('body-parser'); // 解析post 不是二进制的post
const app = express();
app.listen('7070');
app.use(bodyparse.urlencoded({}))
app.post('/a',(req,res) => {
 console.log(req.body)
});