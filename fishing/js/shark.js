function Shark(type) {
    var fishs = _g_res_src['fish']['shark'+[type]];
    Sprit.call(this,{
        img:fishs.img,
        width: fishs.frame.w,
        height: fishs.frame.h,
        sx: fishs.frame.x,
        sy: fishs.frame.y,
        scale: .5,
    })
}

function resetConstructor(a,b) {
    var Super = function () {};
    Super.prototype = Object.create(b.prototype);
    a.prototype = new Super();
    a.prototype.constructor = a;
}
resetConstructor(Shark,Sprit);
// (function () {
//     var Super = function () {};
//     Super.prototype = Sprit.prototype;
//     Shark.prototype = new Super();
//     Shark.prototype.constructor = Shark;
// })()


