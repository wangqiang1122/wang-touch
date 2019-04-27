const http = require('http');
class Mykoa {
    constructor() {
        this._http = http.createServer((req,res)=>{})
    }
    listen(port=80) {
        this._http.listen(port)
    }
}

module.exports = Mykoa;
