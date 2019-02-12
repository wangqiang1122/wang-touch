const express = require('express');
const router = express.Router();
router.get('/',(req,res)=>{
    res.send('我是读者');
    res.end();
})

module.exports = router;