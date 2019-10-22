
var use = function (fn) {
    var a = '2222';
    var ctx = {a:'tttt'};
   fn(ctx,()=>{
      console.log('我是use的属性'+a)
    })
};




use((ctx,next)=>{
    console.log(1);
    console.log(ctx)
    next()
})