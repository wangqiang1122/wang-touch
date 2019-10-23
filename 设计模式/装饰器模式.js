
// 装饰器的超类
class Beverage {
    constructor(description) {
        this.description = description
    }
    getdescription(){
        return this.description
    }
    cost() {
        throw  '需要重写'
    }
}

// 调料接口

class CondimentDecorator extends  Beverage{
    constructor (){
        super()
    }
    getdescription() {}
    cost() {}
}

 // es5形式的
 function Beverage1(description) {
     this.description= description;
 }
    Beverage1.prototype = {
        getdescription:()=>{
            console.log(this);
            return this.description
        },
        cost:()=>{
            throw  '需要重写'
        }
    };

// es5完美形式的对象继承 打破对象之间的引用
function jicheng(object1,object2) {
    // object2继承object1
    var A = function () {};
    A.prototype = object1.prototype;
    object2.prototype = new A();
    object2.prototype.constructor = object2;
}


// 调料接口 es5的形式
 function CondimentDecorator1(description) {
     Beverage1.call(this,description)
 }
jicheng(Beverage1,CondimentDecorator1);

// 新的饮料名字1

function Espress() {
    Beverage1.call(this,'Espress')
}
jicheng(Beverage1,Espress);
// Espress.prototype = Beverage1.prototype;
Espress.prototype.cost= function() {
    return 1
};
Espress.prototype.getdescription= function() {
    return this.description
};


// 新的饮料名字2
function HouseBlend(description) {
    Beverage1.call(this,description)
}
jicheng(Beverage1,HouseBlend);
HouseBlend.prototype.getdescription= function() {
    return 'HouseBlend'
}
HouseBlend.prototype.cost= function() {
    return 2
};
//// 新的饮料名字3
function DrakRoast(description) {
    Beverage1.call(this,description)
}
jicheng(Beverage1,DrakRoast);
DrakRoast.prototype.getdescription= function() {
    return 'HouseBlend'
}
DrakRoast.prototype.cost= function() {
    return 3
};

// 调料1

function  Mocha(beverage) {
   this.beverage=beverage;
}
Mocha.prototype.getdescription= function () {
  return this.beverage.getdescription()+'Mocha'
};
Mocha.prototype.cost = function () {
    return this.beverage.cost()+ 0.3
};



// var a = new HouseBlend();
var a = new Espress();

var beverage = new Mocha(a);
beverage =  new Mocha(beverage);

console.log(beverage.getdescription());
console.log(beverage.cost());


