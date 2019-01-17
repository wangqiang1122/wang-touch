function Fish(type) {
    var fishs = _g_res_src['fish']['fish'+[type]];
    Sprit.call(this,{
        img:fishs.img,
        width: fishs.frame.w,
        height: fishs.frame.h,
        sx: fishs.frame.x,
        sy: fishs.frame.y,
    })
}
Fish.prototype = Sprit.prototype;
Fish.constructor = Fish;
