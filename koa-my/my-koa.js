const http = require('http');
const Event = require('events').EventEmitter; //= require('events').EventEmitter



// fn instanceof GeneratorFunction 并不能找到原型链上的

class Mykoa {
    constructor() {
        this._ev = new Event();
        this._queue = [];
        this._http = http.createServer((req,res)=>{
            const _this = this;
            const ctx = {};
            _run(0)
               function _run(n,callback) {
                if (!_this._queue[n]) return
                const fn = _this._queue[n];
                if (fn.constructor.toString().indexOf('GeneratorFunction')!==-1) {
                    console.warn('警告不支持generator函数了')
                } else if (fn.constructor.toString().indexOf('AsyncFunction')!==-1){
                    console.log('我是async');
                    // fn(ctx,async ()=>{ // 这个是next
                    //     return await _run(n+1);
                    // })
                    fn(ctx, ()=>{ // 这个是next
                        return new Promise((resolve,reject)=>{
                            _run(n+1,()=>{
                                resolve()
                            })
                        })
                    })

                    // _run(n,function () {
                    //     _run(n+1)
                    // })
                } else {
                    // console.log(_this._queue[n].constructor.toString())
                    console.log(fn);
                    fn(ctx,()=>{
                        _run(n+1)
                    })
                }
                  callback&&callback()
            }
        });
    }
    listen(port=80) {
        this._http.listen(port)
    }
    use(fn) {
       this._queue.push(fn);
    }
}

module.exports = Mykoa;
