// 扫描模版中所有的依赖  创建更新函数和Watcher

function Compile(el,vm) {
   // el  宿主
   // vm  当前vue的实例
   this.$el = document.querySelector(el);
   this.$vm = vm;
   if (this.$el) {
       this.$fragment = this.node2fragment(this.$el);// 创建文档块
       // 执行编译
       this.complile(this.$fragment);
       // 追加到宿主元素
       this.$el.appendChild(this.$fragment)
   }
}

Compile.prototype.node2fragment= function (el) {
    const Fragment = document.createDocumentFragment();
    let child;
    while (child = el.firstChild) {
        // appendChild是移动操作 移动一个el里就少一个
        Fragment.appendChild(child)
    }
    
    return Fragment;
};
// 编译函数
Compile.prototype.complile = function (el) {
   let childNodes = el.childNodes;
   Array.from(childNodes).forEach(node => {
       // 判断node类型 做相应的操作
       if (this.isElementNode(node)) {
           // 是元素 识别k-XX的属性或@XX
           this.compileElement(node)
       } else if(this.isTextNode(node)&&/\{\{(.*)\}\}/.test(node.textContent)){
           // 只关心{{XXXX}}
           this.compileText(node,RegExp.$1)
       }
       //遍历子节点
       if (node.childNodes&&node.childNodes.length) {
           this.complile(node)
       }

   });
};
Compile.prototype.isElementNode = function (node) {
    return node.nodeType ===1;
};
// 编译元素F
Compile.prototype.compileElement = function (node) {
    // console.log('编译元素节点')
   const attrs = node.attributes;
   Array.from(attrs).forEach(attr=> {
       // 属性
       const attrName = attr.name;
       const exp = attr.value;
       if (this.isDirective(attrName)) {
           const dir = attrName.substr(2);
           // 双向数据绑定是Dom操作
           this[dir]&&this[dir](node, this.$vm, exp) // 操作节点
       } else if (this.isEventDirective(attrName)) {
           // 给节点绑定事件
           const dir = attrName.substr(1);
           this.eventHandler(node,this.$vm,exp,dir)
       }

   })
};
Compile.prototype.isTextNode = function (node) {
    return node.nodeType ===3;
};
// 编译文本
Compile.prototype.compileText = function (node,exp) {
    // console.log('编译文本节点')
    this.text(node,this.$vm,exp)
};
// 判断是否是指令
Compile.prototype.isDirective = function (attr) {
   return attr.indexOf('w-')===0
};
// 判断是否是事件指令
Compile.prototype.isEventDirective  =function (attr) {
    return attr.indexOf('@')===0
};
// 添加节点事件
Compile.prototype.eventHandler = function () {

};
// 处理文本
Compile.prototype.text = function (node,vm,exp) {
   // 更新节点的文本
    this.update(node,vm,exp,'text') // 指明类型
}
// 处理html
Compile.prototype.html = function (node,vm,exp) {
    // 更新节点的文本
    this.update(node,vm,exp,'html') // 指明类型
}
// 处理双向绑定
Compile.prototype.model = function (node,vm,exp) {
    // 更新节点的文本
    this.update(node,vm,exp,'model') // 指明类型
    const val = vm[exp]; // 需要数据托管
    // 双绑定需要处理视图对数据的改变
    node.addEventListener('input',function (e) {
        vm[exp] = e.target.value;
    })
}
// 更新非常重要
Compile.prototype.update = function (node,vm,exp,dir) {
  let updaterFn = this[dir+'Updater'];
  updaterFn&&updaterFn(node,vm[exp]); // 执行更新  get操作
  new Watcher(vm,exp,(val)=>{
      updaterFn&&updaterFn(node,val);
  })
};
Compile.prototype.textUpdater = function (node,val) {
    node.textContent = val;
};
Compile.prototype.htmlUpdater = function (node,val) {
    node.innerHTML = val;
};
Compile.prototype.modelUpdater = function (node,val) {
    console.log(node)
    console.log(val)
    node.value = val;
};
