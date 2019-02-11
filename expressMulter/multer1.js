let express = require('express');
let app = express();
const multer = require('multer');
const uuid = require('uuid/v4');
const path = require('path');
const fs = require('fs');
app.listen('4444');
let multerobj = multer({ dest:'./upload' });
app.use(multerobj.any())
app.post('/upload',function (req,res,next) {
    console.log(req.files)
    console.log(req.body)
    let newName = req.files[0].path+path.extname(req.files[0].originalname);
    console.log('./upload/'+newName)
    fs.rename(req.files[0].path,newName,function (err) {
        if (err){
            res.status(404).send('失败了')
        } else {
            res.send('成功');
        }
    })
});