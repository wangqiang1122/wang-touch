const fs = require('fs');
fs.stat('../a.html',(err,data)=>{
    if (err){
        console.log(err)
    }else {
        console.log(data)
    }
});