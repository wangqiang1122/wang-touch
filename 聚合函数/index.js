(function () {
    // var arr = [12,234,66];
    // var a = arr.reduce((compose,value)=>{
    //     console.log("compose"+compose)
    //     console.log("compose"+value)
    //     return function (...args) {
    //         console.log(compose)
    //         console.log(value)
    //         return compose+value
    //     }
    // })
    // console.log(a())
    // console.log(a)

    // function f1(args) {
    //     console.log('f1');
    //     return args
    // }
    // function f2(args) {
    //     console.log('f2');
    //     return args
    // }
    // function f3(args) {
    //     console.log('f3');
    //     return args
    // }
    // function f4(args) {
    //     console.log('f4');
    //     return args
    // }
    // compose(f1,f2,f3,f4)('gggg')
    // function compose(...fnc) {
    //   return ()=> {
    //       return fnc.reduce((a,b)=>{
    //           console.log('compose'+a);
    //           console.log('compose'+b)
    //           return (...args)=>{
    //               console.log(a);
    //               console.log(b)
    //               return a(()=>b(...args))()
    //           }
    //       })()
    //   }
    // }
    let next =async () => {}

    let g =  function(middlewares) {
        let idx = 0
        async function next() {
            if (idx < middlewares.length) return Promise.resolve(middlewares[idx++](next))
        }
        return next
        // return ()=> {
        //     // return middlewares.reduce((a,b)=>{
        //     //     console.log('compose'+a);
        //     //     console.log('compose'+b)
        //     //     return (...args)=>{
        //     //         console.log(a);
        //     //         console.log(b)
        //     //         return  a(()=>(b(...args)))
        //     //     }
        //     // })(next)
        //     // return Promise.resolve(
        //     //      middlewares.reduce(
        //     //         (a, b) => () => Promise.resolve(b(a(next))),
        //     //
        //     //     )()
        //     // );
        // }
    }

    async function fn1(next) {
        console.log(next)
        console.log("fn1")
        // return args
        // await next();
        // console.log('fn1-222')
    }
    async function fn2(next) {
        console.log(next)
        console.log("fn2")
        // return args
        // await next()
        console.log('fn2---h')
    }
    async function fn3(next) {
        console.log("fn3")
        // await next()
    }
    async function fn4(next) {
        console.log("fn4")
        // await next()
    }
    // fn1(fn2(fn3()))
    console.log(g([fn1,fn2,fn3,fn4]))
})()
