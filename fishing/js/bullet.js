function Bullut(type) {
    var bottombar = _g_res_src['bullet']['bullet'+type];
    Sprit.call(this,{
        img: bottombar.img,
        width: bottombar.frame.w,
        height: bottombar.frame.h,
        sx: bottombar.frame.x,
        sy: bottombar.frame.y,
        speed: 8,
    });
    this.type = type;
};
resetConstructor(Bullut,Sprit);
Bullut.prototype.setType = function (type) {
    if (type<1 ||type>7){
        return
    }
    var bottombar = _g_res_src['bullet']['bullet'+type];
    this.img= bottombar.img
    this.w= bottombar.frame.w
    this.h= bottombar.frame.h
    this.sx= bottombar.frame.x
    this.sy= bottombar.frame.y
    this.speed= 8
    this.type = type;
};