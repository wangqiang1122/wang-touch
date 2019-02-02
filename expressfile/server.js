let express = require('express');
let app = express();
let path = require('path');
console.log(path.resolve());
console.log(__dirname);
app.listen('3333');

let option = {
     root: path.resolve('./up/'),
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
}

app.get('/a',function (req,res,next) {

    let a = path.resolve('./up/1.html');
   if (req.query['pass'] === '111111') {
       res.sendFile(a,{root:__dirname},function (err) {
               console.log(err)
       });


   } else {
       res.status(403).send('你没有权限');
   }
    res.end()
});