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
   this.scale = option.scale||0;
}

Sprit.prototype.draw = function (dg) {
  console.log(_g_res_src)
  dg.save();
  dg.translate(this.w/2,this.h/2);
  dg.rotate(this.rotation*Math.PI/180);
  // dg.scale(this.scale,this.scale);
  dg.drawImage(this.img,this.sx,this.sy,this.w,this.h,-this.w/2,-this.h/2,this.w,this.h);
};