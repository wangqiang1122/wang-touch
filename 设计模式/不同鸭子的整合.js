/**
 *
 *
 * @constructor
 * 是策略模式的类应用
 * 个人觉得对js来说应该是复杂应用
 * 类的策略模式
 * 我们是用的策略模式来实现鸭子的各种行为的
 */


function Duck() {
   // 可以写一个鸭子的公共属性 把一些可以变化的属性写在外面
   // 比如鸭子的羽毛颜色
   this.flyBehavior='';
   this.quackBehavior = '';
   this.Sound = function () {
       this.quackBehavior&&  this.quackBehavior.makeSound();
   };
   // 起飞
    this.f = function () {
        this.flyBehavior&&this.flyBehavior.fly();
    };
    this.setflyBehavior = function (flyBehavior) {
        this.flyBehavior = flyBehavior;
    }
}


// // 红头的鸭子
//
// var redDuck = new Duck();
// redDuck.makeSound = function () {
//     console.log('嘎嘎叫')
// }
// redDuck.Sound();
// redDuck.f();
//
// // 玩具鸭子
// var playDuck = new Duck();
// playDuck.makeSound = function () {
//     console.log('我不叫')
// }
// playDuck.Sound();

// 起飞的动作
function Fly() {
    this.fly = function () {
        throw '起飞动作需要重写'
    }
}
// 叫声

function QuackBehavior() {
    this.makeSound = function () {
        throw '需要重写叫声'
    }
}



// 红头鸭子
var redDuck = new Duck();
// 红头鸭子可以飞
var f1 = new Fly();
f1.fly = function () {
    console.log('池畔飞')
}
redDuck.flyBehavior = f1;
redDuck.f();
f1.fly = function () {
    console.log('不会飞')
};
redDuck.setflyBehavior(f1);
redDuck.f()

// redDuck.flyBehavior = function () {
//     console.log('我可以飞')
// };
// redDuck.f();
// redDuck.setflyBehavior()
