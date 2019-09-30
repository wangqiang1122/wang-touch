/**
 * 职责链模式
 *
 * */

// 普通写法

var order = function (orderType,pay,stack) {
  if (orderType===1) {
      if (pay===true) {
          console.log('500 元定金已交 得到100元优惠卷')
      } else {
          if(stack>0) {
              console.log('普通购买 无拳')
          } else {
              console.log('手机库存不足')
          }
      }
  } else if(orderType===2) {
      if (pay===true) {
          console.log('200 元定金已交 得到50元优惠卷')
      } else {
          if(stack>0) {
              console.log('普通购买 无拳')
          } else {
              console.log('手机库存不足')
          }
      }
  } else if (orderType===3) {
      if(stack>0) {
          console.log('普通购买 无拳')
      } else {
          console.log('手机库存不足')
      }
  }
};

// 职责链模式写法 三种情况 写成三个函数对象
// 和koa的中间件模式有点像

var Order500 = function (orderType,pay,stack) {
    console.log(arguments)

    if (orderType===1&&pay) {
      console.log('500 元定金已交 得到100元优惠卷')
  } else {
      // 如果处理不了传递给下一个
      return new Promise((reslove)=>{
          setTimeout(()=>{
              reslove('nextSuccessor')
          },5000)
      })
  }
};
var Order200 = function (orderType,pay,stack) {
    if (orderType===2&&pay) {
        console.log('200 元定金已交 得到50元优惠卷')
    } else {
        // 如果处理不了传递给下一个
        return new Promise((reslove)=>{
            reslove('nextSuccessor')
        })
    }
};
var Order1 = function (orderType,pay,stack) {
    console.log('普通模式')
};


var Chian = function (fn) {
  this.fn = fn;
  this.successor = null
};
// 把下一个函数方法押入对象
Chian.prototype.setNextsuccess = function (name) {
   return this.successor = name;
};
// 执行当前绑定fn 判断返回数据 是否指向下一个函数
Chian.prototype.request = function () {
  var ret = this.fn.apply(this,arguments);
    ret&&ret.then((val)=>{
      if (val === 'nextSuccessor') {
          // 如果有下一个函数 执行下一个函数
          this.successor&& this.successor.request.apply(this.successor,arguments);
      }
  })
};

var a1 = new Chian(Order500);
var a2 = new Chian(Order200);
var a3 = new Chian(Order1);
a1.setNextsuccess(a2);
a2.setNextsuccess(a3);

a1.request(2,true,'10')






