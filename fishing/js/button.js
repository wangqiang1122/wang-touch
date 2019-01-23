function Button(dataup,datadown) {
    Sprit.call(this, {
        img: dataup.img,
        width: dataup.frame.w,
        height: dataup.frame.h,
        sx: dataup.frame.x,
        sy: dataup.frame.y,
    });
    this.dataup =dataup;
    this.datadown = datadown;
}
resetConstructor(Button,Sprit);


Button.prototype._check=function(x,y) {
    if (this.x-this.w/2<x
        &&this.x+this.w/2>x
        &&this.y-this.h/2<y
        &&this.y+this.h/2>y) {
        return true
    } else {
        return false
    }
};

Button.prototype.checkUp=function (x,y) {
    if (this._check(x,y)) {
        this.img = this.dataup.img;
        this.sx = this.dataup.frame.x;
        this.sy = this.dataup.frame.y;
        this.w = this.dataup.frame.w;
        this.h = this.dataup.frame.h;
        return true
    } else {
        return false
    }
};
Button.prototype.checkDown=function (x,y) {
    if (this._check(x,y)) {
        this.img = this.datadown.img;
        this.sx = this.datadown.frame.x;
        this.sy = this.datadown.frame.y;
        this.w = this.datadown.frame.w;
        this.h = this.datadown.frame.h;
        return true
    } else {
        return false
    }
};
