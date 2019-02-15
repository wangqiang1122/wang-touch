const express = require('express');
const router = express.Router();
router.get('/',function (req,res) {
 res.send('我是根目录')
 res.end();
});


module.exports= router;