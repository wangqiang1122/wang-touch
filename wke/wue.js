const arrayProto = Array.prototype
// 先克隆一份数组原型
const arrayMethods = Object.create(arrayProto)

const hasProto = '__proto__' in {}

// 七个改变数组的方法
const methodsToPatch = [
    'push',
    'pop',
    'shift',
    'unshift',
    'splice',
    'sort',
    'reverse'
]


function Wue(options) {
    this.$el = options.el;
    this.$data = options.data;
    this.$options = options;
    this.observe(this.$data); // 执行响应式数据操作
    new Compile(this.$el, this) // 执行模版编译工作
}

Wue.prototype.observe = function (data) {
    if (!data|| typeof data !=='object') {
        return
    }

    return new Observer(data)
};

class Observer {
    constructor(value) {
        this.value = value;
        this.dep = new Dep();
        def(value,'__ob__',this)
        // 判断数组
        console.log(Array.isArray(value))
        if (Array.isArray(value)) {
            console.log(value)
            protoAugment(value,arrayMethods)
        } else {
            // 判断value是obj还是数组
            this.walk(value)
        }

    }
    walk() {
        Object.keys(obj).forEach(
            key => defineReactive(obj, key, obj[key]))
    }

}

function def(obj,key,val,enumerable) {
    Object.defineProperty(obj, key, {
        value: val,
        enumerable: !!enumerable,
        writable: true,
        configurable: true
    })
}

// 数组方法覆盖过程
function protoAugment(target,src) {
    console.log('protoAugment')
    target.__proto__ = src
}
Wue.prototype.proxyDate = function(key) {
    Object.defineProperty(this,key,{
        get(){
           return this.$data[key]
        },
        set(val) {
            this.$data[key] = val
        }
    })
}
let defineReactive = function (obj,key,val) {
    this.observe(val);
    var dep = new Dep();
    Object.defineProperty(obj,key,{
        enumerable: true, //可配置 可枚举
        configurable: true, // 不可删除的
        set(newval){
           if (newval===val) {
               return
           }
           val = newval
           dep.notify()
        },
        // 初始化首先触发的是get
        get() {
          Dep.target&&dep.addep(Dep.target);
          return val
        }
    })
};

// 依赖管理器
/*
*  负责视图中所有的依赖和管理，包括添加依赖和通知
* */
function Dep() {
   this.deps = [];  //deps里面存放的全是Watcher的实例
    // 添加Watcher
   this.addep = function (dep) {
     this.deps.push(dep)
   }
   // 通知所有Watcher执行更新
    this.notify = function () {
      this.deps.forEach(item => {
          console.log(item)
          item.update();
      })
    }
}
// 具体的更新执行者
function Watcher(vm,key,cb) {
    this.vm = vm;
    this.key = key;
    this.cb = cb;
    // 将来new 一个监听器时，将当前的Watcher实例附加到 Dep.target上
    // 避免不必要的重复添加
    Dep.target = this;
    console.log(this);
    this.vm[key];
    Dep.target = null;
}
Watcher.prototype.update = function () {
    // console.log('视图更新啦')
    console.log(this.vm[this.key])
    this.cb.call(this.vm,this.vm[this.key]);
}
