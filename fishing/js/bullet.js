function Bullut(type) {
    var bottombar = _g_res_src['bullet']['bullet'+type];
    console.log(bottombar.img)
    Sprit.call(this,{
        img: bottombar.img,
        width: bottombar.frame.w,
        height: bottombar.frame.h,
        sx: bottombar.frame.x,
        sy: bottombar.frame.y,
        speed: 8,
    });
};
resetConstructor(Bullut,Sprit)