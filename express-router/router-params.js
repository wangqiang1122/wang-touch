let express = require('express');
let r1 = express.Router();

r1.get('/a/:a/:b',function (req,res) {
   console.log(req.params)
});
let app = express();
app.listen(8080);
app.use('/r1',r1)
