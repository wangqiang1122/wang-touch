const fs = require('fs');

module.exports =  function (req,res,next) {
    let arr = []
    // 获得ip
    // 获得 时间
    let time = new Date();
    arr.push(time.toGMTString()); // time.toGMTString() time.toUTCString()// 国际话一种标准的写法
    // 获得 请求方式
    arr.push(req.method);
    // 获得 请求的连接
    arr.push(req.url);
    // 换行
    fs.appendFile('./logs/logs.text',arr.join(' ')+'\r\n',(err)=>{

    })
};
