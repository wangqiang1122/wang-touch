function Pizza(str) {
   this.s = str
}
Pizza.prototype.bake = function () {
    console.log("bake")
}
Pizza.prototype.prepare = function () {
    console.log("prepare")
}
Pizza.prototype.cut = function (str) {
    console.log(this.s||"cut")
};

// 芝士披萨

function CheesePizza() {

}
CheesePizza.prototype = new Pizza();
// YangweiPizza
function YangweiPizza(str) {
    Pizza.call(this,str);
}
YangweiPizza.prototype = new Pizza();
YangweiPizza.prototype.cut = function () {
    Pizza.prototype.cut.call(this,'羊');
};

// 披萨店的总接口 用于继承 方便各个类的继承使用
function PizzaStore(foctory) {

}
PizzaStore.prototype.orderPizza = function (type) {
    var pizza = this.createPizza(type);
    pizza.prepare();
    pizza.cut();
}
PizzaStore.prototype.createPizza = function () {
    throw '需要自己实现'
}
// 店一

function Dian1() {

}
Dian1.prototype.createPizza = function (type) {
    var pizza1;
    if (type=="CheesePizza") {
        alert();
        pizza1 = new CheesePizza();
    }
    return pizza1;
};
Dian1.prototype.orderPizza=function (type) {
    PizzaStore.prototype.orderPizza.call(this,type);
};

var n = new Dian1();
n.orderPizza("CheesePizza");