
function print(str) {
    console.log(str);
}

class Pizza{
    prepare() {
        print('prepare');
    }
    bake() {
        print('bake');
    }
    cut() {
        print('cut');
    }
    box() {
        print('box');
    }
}
//店1的特色
class LaweiPizza extends Pizza {
    constructor() {
        super();
    }
    prepare(){
        print('我放辣椒了');
    }
    thunk() {
        print('我会赠送大卡车');
    }
}
// 店2的特色
class YangweiPizza extends Pizza{
    prepare() {
        print('我放羊杂了');
    }
}
class PizzaStore{
    constructor (){}
    orderPizza(type){
        var pizza;
        pizza = this.createPizza(type);
        pizza.prepare();
        return pizza;
    };
    createPizza(){};
}
// 店一的总店
class Dian1 extends PizzaStore{
    constructor() {
        super()
    }
    orderPizza(type) {
        super.orderPizza(type)
    }
    createPizza(type) {
        var pizza = null;
        if (type==='lawei') {
            pizza = new LaweiPizza();
        } else if (type==='yangwei') {
            pizza = new YangweiPizza();
        }
        return pizza
    }
}

var a = new Dian1();
a.orderPizza('yangwei');
