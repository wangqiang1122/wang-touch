let dns = require('dns');
dns.lookup('www.nodejs.org',(err,data)=>{
    console.log(data)
});
dns.lookupService('104.20.22.46',80,(err,data)=>{
    console.log(err)
    console.log(data)
});
