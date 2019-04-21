const fs = require('fs');
const assert = require('assert')
module.exports = function (root) {
    assert(root, '必须有')
    assert(typeof root==='string','必须是字符串')
    return async (ctx)=>{
        let a = await new Promise((resolve,reject) => {
            console.log(`${root}${ctx.request.path}`)
            fs.readFile(`${root}${ctx.request.path}`,(err,data)=>{
                console.log(data)
                if (err){
                    reject(err)
                } else{
                    resolve(data.toString())
                }
            })
        });
        ctx.response.body = a
        console.log(ctx.request.query); // 有的
        console.log(ctx.req.query) // 是空的
    }
}
