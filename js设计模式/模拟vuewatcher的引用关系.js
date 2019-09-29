function Watcher(a,b,cd) {
   this.a = a;
   this.b = b;
   this.cb = cd;
   console.log(this);
    this.updata()
}


Watcher.prototype.updata = function () {
    console.log(this.cb)
   this.cb.call(window,this.b)
};
