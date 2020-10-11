async function get() {
    let a = await new Promise((resolve)=>{resolve('11111')});
    console.log(a)
    return a
}

async function f() {
   // var h = await get();
    get().then((arg)=>{console.log(arg)})
   // console.log(h)
}
f()
