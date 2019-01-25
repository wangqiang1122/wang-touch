// sx,sy 是绘制一整张图 还是绘制图里面的某一部分
// w,h  绘制的宽高
// x,y 在canvas的哪里开始绘制
// rotation // 旋转
// scale 放大

function Sprit(option) {
   this.img = option.img;
   this.w = option.width||this.img.width;
   this.h = option.height|| this.img.height;
   this.x = option.x||0;
   this.y = option.y||0;
   this.sx = option.sx||0;
   this.sy = option.sy||0;
   this.rotation = option.rotation||0;
   this.scaleX = option.scaleX||1;
   this.scaleY = option.scaleY||1;
   this.speed = option.speed||0;
   // 图片更换的最大 张数 和更换的频率
    this.frame = 0;
   //  this.max_frame = 4;
    this.tick = 0;
   //  this.max_tick = 10;
}

Sprit.prototype.draw = function (dg) { // 画图
  dg.save();
  dg.translate(this.x,this.y);
  dg.rotate(this.rotation*Math.PI/180);
  dg.scale(this.scaleX,this.scaleY);
  dg.drawImage(this.img,this.sx,this.sy,this.w,this.h,-this.w/2,-this.h/2,this.w,this.h);
  dg.restore();
};
Sprit.prototype.move = function () { // 路程
    var speedx =this.speed* Math.sin(this.rotation*Math.PI/180);
    var speedy = this.speed*Math.cos(this.rotation*Math.PI/180);
    this.x+=speedx;
    this.y-=speedy;
};
Sprit.prototype.nextFrame = function (index) { // 换帧 (更换图片)
    this.sy = this.h*index
};
Sprit.prototype.nextImg = function () {
    this.tick++;
    if (this.tick === this.max_tick) {
        this.tick = 0;
        this.frame++;
        if (this.frame===this.max_frame) {
            this.frame =0;
            this.nextFrame(this.frame)
            return true
        } else {
            this.nextFrame(this.frame)
            return false
        }
    }
}
Sprit.prototype.outofCanvas = function (w,h) {
  if (
      this.x<0-this.w-100||
      this.y<0-this.h-100||
      this.x>w+this.w+100||
      this.y>h+this.h+100
  ) {
      return true
  } else {
      return false
  }
};
Sprit.prototype.colltest = function (sprit2) {
    var r1 = Math.min(this.w/2,this.h/2);
    var r2 = Math.min(sprit2.w/2,sprit2.h/2);
    var dis = Math.sqrt(Math.pow(this.x-sprit2.x,2)+Math.pow(this.y-sprit2.y,2));
    if (dis<=(r1+r2)){
        return true
    } else {
        return false
    }
}