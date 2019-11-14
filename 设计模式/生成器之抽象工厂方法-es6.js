// 抽象工厂方法就只只写接口 不写任何业务逻辑 适合大型项目 所有的分部的披萨原料工厂 都要继承次总部的原料工厂
class PizzaIngredientFoctory{
    createDough(){};
    createSauce(){};
    createCheese(){};
    createPepperoni(){};
    createClam(){};
}
// 纽约的原料工厂 // 可以自定义自己的原料 不允许自己生产原料 必须要我原料工厂的方法生产原料
class NYPizzaIngredientFoctory extends  PizzaIngredientFoctory{
    createDough(){
        console.log('NYcreateDough');
      return 'NYcreateDough'
    }
    createSauce(){
        console.log("NYPcreateSauce");
        return 'NYPcreateSauce'
    };
    createCheese(){
        console.log('NYcreateCheese')
        return 'NYcreateCheese'
    };
    createPepperoni(){
        console.log("NYcreateCheese");
        return "NYcreatePepperoni"
    };
    createClam(){
        console.log("NYcreateClam");
        return 'NYcreateClam'
    };
}


// 芝加哥的原料工厂
class ZJGPizzaIngredientFoctory extends PizzaIngredientFoctory{
    createDough(){
        return 'ZJGcreateDough'
    }
    createSauce(){
        console.log('')
        return 'ZJGcreateSauce'
    };
    createCheese(){
        return 'ZJGcreateCheese'
    };
    createPepperoni(){
        return "ZJGcreatePepperoni"
    };
    createClam(){
        return 'ZJGcreateClam'
    };
}


// 披萨总类
class Pizza{
  constructor() {
      this.name = null;
  }
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
    setname(name) {
      this.name = name
    }
    getname() {
      return this.name
    }
}

// 新建一个披萨

class CheesePizza extends Pizza{
    // 原料工厂的
    constructor(IngredientFoctory) {
        super();
        this.ingredientFoctory = IngredientFoctory;
    }
    prepare() {
        console.log(this.ingredientFoctory)
        this.ingredientFoctory.createSauce();
        this.ingredientFoctory.createCheese();
    }
    setname(name) {
        super.setname(name)
    }
    getname(){
       return super.getname();
    }
}



// 制造披萨的总工厂

class PizzaStore{
    orderPizza(type) {
        // 制造披萨
        var pizza = null;
        pizza = this.createPizza(type);
        pizza.prepare();
        console.log(pizza.getname());
    }
    createPizza() {}
}
// 建立一个纽约店 把原料和披萨结合在一起
class NYpizzaStore extends PizzaStore{
    orderPizza(type){
        super.orderPizza(type)
    }
    createPizza(type) {
        var foctory = new NYPizzaIngredientFoctory();
        var pizza = null;
        if (type==="cheese") {
            pizza = new CheesePizza(foctory);
            pizza.setname('cheese哈哈哈')
        }
        return pizza;
    }
}

var a = new NYpizzaStore();
a.orderPizza('cheese')