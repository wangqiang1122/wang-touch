let dns = require('dns');
dns.lookup('www.baidu.com',(err,data)=>{
    console.log(data)
})
