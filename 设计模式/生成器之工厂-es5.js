function Pizza() {

}
Pizza.prototype={
    prepare: function () {
        console.log('prepare')
    },
    bake: function () {
        console.log('bake')
    },
    cut: function () {
        console.log('cut')
    }
};

function CheesePizza() {
    Pizza.call(this);
}

CheesePizza.prototype = new Pizza();
CheesePizza.prototype.prepare = function () {
    console.log('CheesePizza-prepare');
};
CheesePizza.prototype.bake = function () {
    console.log('CheesePizza-bake');
};
CheesePizza.prototype.cut = function () {
    console.log('CheesePizza-cut');
};

function SimplePizzaFactory() {
    this.pizza = null;
}
SimplePizzaFactory.prototype.createPizza = function (type) {
    if (type==="yuan") {
        this.pizza = new CheesePizza();
    } else {
        this.pizza = new Pizza();
    }
    return this.pizza;
};


function PizzaStore(obj) {
    this.foctory = obj;
}
PizzaStore.prototype.orderPizza = function (type) {
  var pizza = null;
  pizza = this.foctory.createPizza(type)
   pizza.prepare();
    pizza.bake();
};



var a = new PizzaStore(new SimplePizzaFactory());
a.orderPizza('yuan')


