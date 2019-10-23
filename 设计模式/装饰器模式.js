
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
            return this.description
        },
        cost:()=>{
            throw  '需要重写'
        }
    };

// es5完美形式的对象继承 打破对象之间的引用
function jicheng(object1,object2) {
    // object2继承object1
    console.log(object1.prototype)
    var A = function () {};
    A.prototype = object1.prototype;
    console.log(A.prototype);
    console.log(new A())
    object2.prototype = new A();
    console.log(object2.prototype)
    object2.prototype.constructor = object2;
    // console.log(object2.prototype)
}


// 调料接口 es5的形式
 function CondimentDecorator1(description) {
     Beverage1.call(this,description)
 }
jicheng(Beverage1,CondimentDecorator1);

console.log(new CondimentDecorator1('wwwww').getdescription())

