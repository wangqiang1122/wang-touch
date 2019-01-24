function Fish(type) {
    if (type>5&&type<1){
        throw ('鱼的类型在1到5之间')
    }
    var fishs = _g_res_src['fish']['fish'+[type]];
    Sprit.call(this,{
        img:fishs.img,
        width: fishs.frame.w,
        height: fishs.frame.h,
        sx: fishs.frame.x,
        sy: fishs.frame.y,
        speed: Math.random()*2+1,
        rotation: 90,
    })
    this.frame = 0;
    this.max_frame = 4;
    this.tick = 0;
    this.max_tick = 10;
}
function createobj(prototype) {  // 防止父类的的方法被重写 方便子类的重写父类方法 但是不会覆盖掉父类原型相同的方法 解耦合
    var a = function () {};
    a.prototype = prototype;
    a.prototype.constructor = a;
    return new a();
}
Fish.prototype = createobj(Sprit.prototype);
Fish.prototype.olddraw = Fish.prototype.draw;
Fish.prototype.draw= function(dg) {
    this.rotation -=90;
    Fish.prototype.olddraw.call(this,dg);
    this.rotation +=90;
};
// Fish.prototype.nextfish= function() {
//     this.tick++;
//     if (this.tick === this.max_tick) {
//         this.tick = 0;
//         this.frame++;
//         if (this.frame===this.max_frame) {
//             this.frame =0;
//         }
//         Sprit.prototype.nextFrame.call(this,this.frame)
//     }
// };

Fish.constructor = Fish;
