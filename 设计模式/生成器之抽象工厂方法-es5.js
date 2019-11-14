
function print(str) {
    console.log(str);
}

// es用几声组合式继承
function jicheng(oldObj,newObj) {
    var A = function () {};
    A.prototype = oldObj.prototype;
    newObj.prototype = new A();
    newObj.prototype.constructor = newObj
}



// 总公司原料工厂
function PizzaIngredientFoctory() {

}
PizzaIngredientFoctory.prototype = {
    createDough:function(){},
    createSauce:function(){},
    createCheese:function(){},
    createPepperoni:()=>{},
    createClam:()=>{},
}
// 建立纽约原料工厂

function NYPizzaIngredientFoctory() {
    PizzaIngredientFoctory.call(this);
}
jicheng(PizzaIngredientFoctory,NYPizzaIngredientFoctory);
NYPizzaIngredientFoctory.prototype.createDough = function () {
    console.log('NYcreateDough')
};
NYPizzaIngredientFoctory.prototype.createSauce = function () {
    console.log('NYcreateSauce')
};
NYPizzaIngredientFoctory.prototype.createCheese = function () {
    console.log('NYcreateCheese')
};
// var a = new NYPizzaIngredientFoctory();

// 建立芝加哥原料工厂
function ZJGizzaIngredientFoctory() {
    PizzaIngredientFoctory.call(this);
}
jicheng(PizzaIngredientFoctory,ZJGizzaIngredientFoctory);
ZJGizzaIngredientFoctory.prototype.createDough = function () {
    console.log('ZJGcreateDough')
};
ZJGizzaIngredientFoctory.prototype.createSauce = function () {
    console.log('ZJGcreateSauce')
};
ZJGizzaIngredientFoctory.prototype.createCheese = function () {
    console.log('ZJGcreateCheese')
};

// 建立新的披萨总工厂

function Pizza(Foctory) {
    this.name = null;
    this.Foctory = Foctory;
}
Pizza.prototype = {
    prepare:function(){
        // 披萨加工
        print('prepare');
        console.log(this.Foctory)
        this.Foctory.createDough();
        this.Foctory.createCheese();
    },
    bake:function() {
        print('bake');
    },
    cut:function(){
        print('cut');
    },
    box:function(){
        print('box');
    },
    setname:function(name) {
        this.name = name
    },
    getname:function() {
        return this.name
    }
};
// 新建一个纽约店的披萨
function CheesePizza(Foctory) {
    console.log(Foctory)
    Pizza.call(this,Foctory);
}
jicheng(Pizza,CheesePizza);


// 新建一个总店 其他的分店都要继承总店
function PizzaStore() {

}
PizzaStore.prototype = {
    orderPizza: function(type){
         var pizza = this.createPizza(type);
         pizza.prepare();
    },
    createPizza:function () {

    }
};
// 新建一个纽约分店

function NYpizzaStore() {
    PizzaStore.call(this);
}
jicheng(PizzaStore,NYpizzaStore);
NYpizzaStore.prototype.createPizza=function (type) {
    // 纽约分店需要要从纽约工厂
    var fotory = new NYPizzaIngredientFoctory();
    var pizza = null;
    if (type=="cheese") {
        pizza = new CheesePizza(fotory)
    }
    return pizza
};


var a = new NYpizzaStore();
console.log(a);
a.orderPizza('cheese');
