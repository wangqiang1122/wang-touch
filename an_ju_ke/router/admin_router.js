const express = require('express');
const router = express.Router();
router.get('/',function (req,res) {
   res.send('admin');
   res.end();
});


module.exports= router;