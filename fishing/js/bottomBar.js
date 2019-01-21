function Bottombar() {
    var bottombar = _g_res_src['bottom']['bottom_bar'];
    // Sprit.call(this,{
    //     img: bottombar.img,
    //     width: bottombar.frame.w,
    //     height: bottombar.frame.h,
    //     sx: bottombar.frame.x,
    //     sy: bottombar.frame.y,
    //     x:  400,
    //     y: 566
    // });
    return new Sprit({
        img: bottombar.img,
        width: bottombar.frame.w,
        height: bottombar.frame.h,
        sx: bottombar.frame.x,
        sy: bottombar.frame.y,
        x:  400,
        y: 566
    })
}
// resetConstructor(Bottombar,Sprit);