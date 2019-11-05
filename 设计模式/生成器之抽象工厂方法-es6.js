// 抽象工厂方法就只只写接口 不写任何业务逻辑 适合大型项目 所有的分部的披萨原料工厂 都要继承次总部的原料工厂
class PizzaIngredientFoctory{
    createDough(){};
    createSauce(){};
    createCheese(){};
    createPepperoni(){};
    createClam(){};
}
// 纽约的原料工厂
class NYPizzaIngredientFoctory extends  PizzaIngredientFoctory{

}
