function Coin(type) {
    var cannon = _g_res_src['coin']['coinAni'+type];
    Sprit.call(this,{
        img: cannon.img,
        width: cannon.frame.w,
        height: cannon.frame.h,
        sx: cannon.frame.x,
        sy: cannon.frame.y,
    });
    this.type = type;
    this.frame = 0;
    this.max_frame = 10;
    this.tick = 0;
    this.max_tick = 2;
}
resetConstructor(Coin,Sprit);
