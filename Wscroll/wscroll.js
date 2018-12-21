(function (w) {
    var events = {};
    function Wscroll(el, options) {
      this.options = {};
      this.options.scrollX = options.scrollX === undefined ? false:options.scrollX;
      this.options.scrollY = options.scrollY === undefined ? true:options.scrollY;
      this.options.bounce = options.bounce === undefined ? true:options.bounce;
      this.options.bounceTime = options.bounceTime === undefined ? true:options.bounceTime;
      this.options.startX = options.startX === undefined ? 0:options.startX;
      this.options.startY = options.startY === undefined ? 0:options.startY;
      this.options.freeScroll = options.freeScroll === undefined ? false:options.freeScroll;
      this.options.directionLock = options.directionLock === undefined ? 5:options.directionLock;

      this.el = el&&document.getElementById(el);
      if (!document.getElementById(el)) {
          alert('没有大容器');
          return
      }
      if (!this.el.children[0]) {
          alert('没有容器');
          return
      }
      this.content = this.el.children[0]; // 内容区
      this.content.addEventListener('touchstart',start,false);
      this.content.addEventListener('touchmove',move,false);
      this.content.addEventListener('touchend',end,false);
      var dir = '',startx,starty,translateX=this.options.startX,translateY=this.options.startY,
          self = this,disx,disy,left,top,firstmove = false;
      this.content.style.transform = this._translate(this.options.startX,this.options.startY);
      function start(ev) {
          dir = '';
          // translateX =  self.options.startX;
          // translateY = self.options.startY;
          startx = ev.changedTouches[0].clientX;
          starty = ev.changedTouches[0].clientY;
          disx = startx - translateX;
          disy = starty - translateY;
          events['beforemovestart']&&events['beforemovestart']();
          left = 0;
          top = 0;
          firstmove = true;
          self.content.style.transition = '';
      }
      function move(ev) {
        if (firstmove) {
            events['movestart']&&events['movestart']();
            firstmove = false;
        }
        if (self.options.freeScroll) {
            translateX = (ev.changedTouches[0].clientX)-disx;
            translateY = (ev.changedTouches[0].clientY)-disy;
            self.content.style.transform = self._translate(translateX,translateY);
        } else {
            if (!dir) {
                if (Math.abs(ev.changedTouches[0].clientX - startx) >=5){
                    dir = 'l'
                } else if (Math.abs(ev.changedTouches[0].clientY - starty) >=5) {
                    dir = 't'
                }
            } else {
               if (dir ==='l') {
                   translateX = (ev.changedTouches[0].clientX)-disx;
                   if (translateX>0) {
                       translateX = translateX/4;
                   } else if ( Math.abs(translateX)>(self.content.offsetWidth-self.el.offsetWidth)) {
                       left = (Math.abs(translateX)-(self.content.offsetWidth-self.el.offsetWidth))/4;
                       translateX = -(Math.abs(self.content.offsetWidth-self.el.offsetWidth)+left);
                   }
                  self.content.style.transform = self._translate(translateX,self.options.startY);
               } else if (dir ==='t') {
                   translateY = (ev.changedTouches[0].clientY)-disy;
                   if (translateY>0) {
                       translateY = translateY/4;
                   } else if(Math.abs(translateY)>(self.content.offsetHeight-self.el.offsetHeight)) {
                       top = (Math.abs(translateY)-(self.content.offsetHeight-self.el.offsetHeight))/4;
                       translateY = -(Math.abs(self.content.offsetHeight-self.el.offsetHeight)+top);
                   }
                   self.content.style.transform = self._translate(self.options.startX,translateY);
               }
            }
        }
      }
      function end(ev) {
          console.log(self.content.offsetWidth-window.document.documentElement.offsetWidth)
          if (translateX>0) {
              translateX = 0;
          } else if ( Math.abs(translateX)>(self.content.offsetWidth-self.el.offsetWidth)) {
              translateX = -(self.content.offsetWidth-self.el.offsetWidth);
          }
          if (translateY>0) {
              translateY = 0;
          } else if (Math.abs(translateY)>(self.content.offsetHeight-self.el.offsetHeight)) {
              translateY = -(self.content.offsetHeight-self.el.offsetHeight);
          }
          self.options.startX = translateX;
          self.options.startY = translateY;
          self.content.style.transform =self._translate(translateX, translateY);
          self.content.style.transition = self.content.style.webkitTransition = '600ms';
          // self.content.style.transition = self.content.style.webkitTransition = 'cubic-bezier(.1, .57, .1, 1)';
          // 安卓低版本动画会有抖动
          self.content.style.cssText = 'transition:600ms cubic-bezier(.1, .57, .1, 1); ' +
              '-webkit-transition:600ms cubic-bezier(.1, .57, .1, 1);'
              // ' -webkit-transform:'+self._translate(translateX, translateY)+'';
      }
      return this;
    }
    w.Wscroll =Wscroll;

    Wscroll.prototype._translate = function (x,y) { // 私有方法
        var arr = ['translateZ(0.1px)'];
        if (this.options.scrollX) {
            arr.push('translateX('+ x+'px)');
        }
        if (this.options.scrollY) {
            arr.push ('translateY('+y+'px)');
        }
        return  arr.join(' ');

    };
    Wscroll.prototype.on = function (type,fn) {
        events[type] = fn;
    }
})(window);