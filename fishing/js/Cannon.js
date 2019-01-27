function Cannon(type) {
    var cannon = _g_res_src['cannon']['cannon'+type];
    Sprit.call(this,{
        img:cannon.img,
        width: cannon.frame.w,
        height: cannon.frame.h,
        sx: cannon.frame.x,
        sy: cannon.frame.y,
        x: 442,
        y: 556
    });
    this.type = type;
    this.frame = 0;
    this.max_frame = 5;
    this.tick = 0;
    this.max_tick = 2;
}
resetConstructor(Cannon,Sprit);
Cannon.prototype.setType = function (type) {
    console.log(type<=0)
    if (type<1 ||type>7){
        return
    }
    var cannon = _g_res_src['cannon']['cannon'+type];
    this.type = type;
      this.img=cannon.img
        this.w= cannon.frame.w
        this.h= cannon.frame.h
        this.sx= cannon.frame.x
        this.sy= cannon.frame.y
        this.x= 442
        this.y= 556
};