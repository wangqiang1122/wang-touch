const fs = require('fs');
fs.stat('../a.ejs',(err,data)=>{
    if (err){
        console.log(err)
    }else {
        console.log(data)
    }
});