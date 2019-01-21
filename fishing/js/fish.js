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
        speed: Math.random()*3+1,
    })
}
Fish.prototype = Sprit.prototype;
// Fish.prototype.olddraw = Fish.prototype.draw;
Fish.prototype.draw= function(dg) {
    this.rotation -=90;
    dg.save();
    dg.translate(this.x,this.y);
    dg.rotate(this.rotation*Math.PI/180);
    // dg.scale(this.scale,this.scale);
    dg.drawImage(this.img,this.sx,this.sy,this.w,this.h,-this.w/2,-this.h/2,this.w,this.h);
    dg.restore();
    this.rotation +=90;
};
Fish.constructor = Fish;
