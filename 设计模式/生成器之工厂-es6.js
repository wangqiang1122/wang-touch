
const print=(str)=>{
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
// 芝士披萨的类
class ChesePizza extends Pizza{
    prepare() {
        print('ChesePizzaprepare');
    }
    bake() {
        print('ChesePizza-bake');
    }
    cut() {
        print('ChesePizza-cut');
    }
    box() {
        print('ChesePizza-box');
    }
}

console.log(Pizza.prototype.prepare());

class SimplePizzaFactory{
    constructor() {
        this.pizza = null;
    }
    createPizza(type) {
        if (type ==='yuan') {
            this.pizza = new Pizza();
        } else {
            this.pizza = new ChesePizza();
        }
      return this.pizza;
    }
}

class PizzaStore{
    constructor(obj) {
      this.foctory = obj;
    }

    orderPizza(type) {
        var pizza = this.foctory.createPizza(type);
        pizza.prepare();
        pizza.bake();
    }
}

var a = new PizzaStore(new SimplePizzaFactory());
a.orderPizza();

