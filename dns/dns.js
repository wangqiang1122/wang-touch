let dns = require('dns');
dns.lookup('www.cnblogs.com',(err,data)=>{
    console.log(data)
});
dns.lookupService('47.111.45.248',80,(err,data)=>{
    console.log(err)
    console.log(data)
});
