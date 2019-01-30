let dns = require('dns');
dns.lookup('www.cnblogs.com',(err,data)=>{
    console.log(data)
});
dns.lookupService('101.37.225.65',80,(err,data)=>{
    console.log(err)
    console.log(data)
});
