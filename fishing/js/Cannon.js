function Cannon(type) {
    var cannon = _g_res_src['cannon']['cannon'+type];
    console.log(cannon);
    Sprit.call(this,{
        img:cannon.img,
        width: cannon.frame.w,
        height: cannon.frame.h,
        sx: cannon.frame.x,
        sy: cannon.frame.y,
    });
}
resetConstructor(Cannon,Sprit);