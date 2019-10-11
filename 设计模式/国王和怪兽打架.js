// Charactor是个超类所有的人物必须继承与他

function Charactor() {
    this.Weapon = '';
    this.flight=function () {
       throw '必须重写'
    };
    this.setWeaponBehavior = function (w) {
        this.Weapon = w;
    }
}

// 武器行为类
function WeaponBehavior() {
    this.useWeapon = function () {

    }
}
// 武器行为
// 剑
var SwordBehavior = new WeaponBehavior();
SwordBehavior.useWeapon= function () {
  console.log('挥舞大剑')
};
// 弓箭
var BowAddArrorBehavior = new WeaponBehavior();
BowAddArrorBehavior.useWeapon = function () {
    console.log('万箭齐发')
};
// 国王
var Wing = new Charactor();
Wing.setWeaponBehavior(BowAddArrorBehavior);
Wing.flight= function () {
    this.Weapon.useWeapon();
};
Wing.flight();

// 皇后
var Queue = new Charactor();
Wing.setWeaponBehavior(SwordBehavior);
Wing.flight= function () {
    this.Weapon.useWeapon();
};
Wing.flight();