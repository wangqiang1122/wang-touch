const http  =require('http');
const fs = require('fs');
let client = http.request({
    host: 'www.baidu.com',
    port: 80,
    path: '/s?wd=a&rsv_spt=1&rsv_iqid=0x9e0624a80002066d&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=1&rsv_sug3=1&rsv_sug2=0&inputT=174&rsv_sug4=174'
},res=>{
    var str = '';
    res.on('data',(d)=>{
        str+=d
    });
    res.on('end',()=>{
        fs.writeFile('./fs/a.html',str,()=>{})
        console.log(str)
    });
})
client.end()