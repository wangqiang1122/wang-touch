
const VNodeType = {
    // 组件待扩展
    HTML:'HTML',
    TEXT:'TEXT',
    FUNCTION: 'FUNCTION'
}
// 子属性
let ChildTyps = {
    EMPTY:'EMPTY',
    SINGLE:'SINGLE',
    MULTIPLE:'MULTIPLE'
}
function createElement(tag,attr,children) {
  // console.log(tag)
    let flags;
    if (typeof tag==='string') {
        flags = VNodeType.HTML
    } else if (typeof tag === 'function') {
        flags = VNodeType.FUNCTION
    }
    let childrenFlags = null;
    if (Array.isArray(children)) {
        if (children.length===0) {
            childrenFlags = ChildTyps.EMPTY;
        } else if (children.length>1) {
            childrenFlags = ChildTyps.MULTIPLE;
        } else {
            childrenFlags = ChildTyps.SINGLE;
        }
    } else {
        childrenFlags = ChildTyps.SINGLE;
        children = createTextnode(children);
    }

  return {
      tag:tag,
      flags: flags,
      attr: attr,
      childrenFlags: childrenFlags,
      children:children,
      key: attr&&attr.key,
      el: null
  }
}

function createTextnode(text) {
    return {
        tag: null,
        flags: VNodeType.TEXT,
        attr: '',
        childrenFlags: ChildTyps.EMPTY,
        children: text
    }
}
function render(container,vnode) {
 // 挂载函数
  if (container.vnode) {
      console.log('开始变化')
      //打补丁
      patch(container,container.vnode,vnode)
  } else {
      mount(container,vnode);
  }
    container.vnode = vnode;
}
// 核心diff
function patch(container,oldNode,newNode) {
    const oldflags = oldNode.flags;
    const newflags = newNode.flags;

    // 元素不通直接把老得删掉 新建新的
    if (oldflags !== newflags) {
        replaceNode(container,oldNode,newNode)
    } else if (newflags===VNodeType.HTML) {  // 如果新的也是html属性
        patchElement(container,oldNode,newNode)  // diff核心思想
    } else if (newflags===VNodeType.HTML) {
        patchText(oldNode,newNode)
    }
}

function replaceNode(container,oldNode,newNode) {
    container.removeChild(oldNode.el)
    mount(container,newNode)
}

// 对比节点
function patchElement(container,oldNode,newNode) {
    // 如果新旧 VNode 描述的是不同的标签，则调用 replaceVNode 函数使用新的 VNode 替换旧的 VNode
   if (oldNode.tag!==newNode.tag) {
       replaceNode(container,oldNode,newNode)
       return
   }
   const el = (newNode.el = oldNode.el);
   // 对属性更新
   let oldAttr =  oldNode.attr;
   let newAttr =  newNode.attr;
   // 新属性添加
   if (newAttr) {
       for (var a in newAttr) {
           const oldValue = oldAttr[a]
           const newtValue = newAttr[a]
           patchAttr(el, a, oldValue, newtValue)
       }
   }
   // 老属性删除
   if (oldAttr) {
      for (var b in oldAttr) {
          if (oldAttr[b]&&!newAttr.hasOwnProperty(b)) {
              patchAttr(el, b, oldAttr[b], null)
          }
      }
   }

   ///
    patchChildren(
        oldNode.childrenFlags,  // 子节点类型
        newNode.childrenFlags,
        oldNode.children,     // 子节点
        newNode.children,
        el,                   // 当前节点
    );

   function patchChildren(
       oldNodeChildrenFlags,
       newNodeChildrenFlags,
       oldNodeChildren,
       newNodeChildren,
       el
   ) {
     switch (oldNodeChildrenFlags) {
         // old是空的
         case ChildTyps.EMPTY:
             switch (newNodeChildrenFlags) {
                 case ChildTyps.SINGLE:
                     mount(el,newNodeChildren);
                     break;
                 case ChildTyps.MULTIPLE:
                     for (var a=0;a<newNodeChildren.length;a++) {
                         mount(el,newNodeChildren[a]);
                     }
                 break;
             }
             break;
           // old是单个的
         case ChildTyps.SINGLE:
             switch(newNodeChildrenFlags) {
                 case ChildTyps.SINGLE:
                     patch(el,oldNodeChildren,newNodeChildren)
                     break;
                 case ChildTyps.EMPTY:
                     el.removeChild(oldNodeChildren.el);
                     break;
                 case ChildTyps.MULTIPLE:
                     el.removeChild(oldNodeChildren);
                     for (var c=0;c<newNodeChildren.length;c++) {
                         mount(el,newNodeChildren[c]);
                     }
                 break
             }
             break;
         case ChildTyps.MULTIPLE:
             switch (newNodeChildrenFlags) {
                 case ChildTyps.SINGLE:
                     for (var b=0;b<oldNodeChildren.length;b++) {
                         el.removeChild(oldNodeChildren[b].el);
                     }
                     mount(el,newNodeChildren);
                     break;
                 case ChildTyps.EMPTY:
                     for (var b=0;b<oldNodeChildren.length;b++) {
                         el.removeChild(oldNodeChildren[b].el);
                     }
                     break;
                 case ChildTyps.MULTIPLE: // 最复杂的
                   // 但新的 children 中有多个子节点时，会执行该 case 语句块
                     // diff 首先不是删除元素 而是移动元素 移动元素比新建元素省资源
                     // 新的[a,b,c]
                     // 老得[a,b,c]
                     // 不用修改
                     // 新的[a,b,s,d,c]
                     // 老得[a b c]
                     // 也不用修改只要新插入元素
                     // 新的 [b,a,c]
                     // 老得 [a,b,c]
                     // 需要先移动元素 在插入新的元素
                     let lastIndex = 0; // 新老 虚拟dom元素位置 记录
                     console.log('新老都是数组');
                     // 循环新的虚拟dom节点
                     for (let i = 0; i<newNodeChildren.length;i++) {
                         var newNode = newNodeChildren[i];
                         let j =0;
                         var isxin = false; // 判断新的节点里是否有老节点 如果没有老节点怎则需要新加节点
                         for (j;j<oldNodeChildren.length;j++) {
                             var oldNode = oldNodeChildren[j];
                             if (newNode.key === oldNode.key) {   // abc的增长趋势
                                 isxin = true;
                                 patch(el,oldNode, newNode);
                                 if (j<lastIndex) { // 符合这个条件的肯定顺序和旧的顺序不对 新的里面的上一个节点和旧的里面的下一个节点相似的地方
                                     var flagnode = (newNodeChildren[i-1].el.nextSibling);  // 找到上一个节点  这个节点是基点 要在前面
                                     // console.log(flagnode);
                                     var bbbb = oldNode.el;
                                     // console.log(bbbb)
                                     el.insertBefore(bbbb,flagnode);
                                     break
                                 } else {
                                     lastIndex = j;
                                 }

                             }
                         }
                         console.log(isxin)
                         if (!isxin) {
                             console.log(i-1)
                             var regnode = (i-1)<0?oldNodeChildren[0].el:newNodeChildren[i-1].el.nextSibling; // 新加元素的位置基点
                             mount(el,newNode,regnode)
                         }
                     }
                     // 删除新的虚拟dom不存在的老节点
                     oldNodeChildren.forEach(item=>{  // 需要key值
                         var has = newNodeChildren.find((newnode)=>{
                             return newnode.key === item.key;
                         });
                         if (!has) {
                             console.log(el);
                             console.log(item.el)
                             el.removeChild(item.el)
                         }
                         // if (!newNodeChildren.hasOwnProperty(item)) {
                         //     el.removeChild(item.el)
                         // }
                     })

             }
     }
   }
}
function patchText(oldNode,newNode) {
   vnewNode.el = oldNode.el;
   if (oldNode.children!==newNode.children) {
       const el =oldNode.el;
       el.textContent = newNode.children;
   }

}

function mount(container,vnode,regnode) {
  var flags = vnode.flags;
  if (flags===VNodeType.HTML) {
      mountElement(container,vnode,regnode)
  } else if (flags===VNodeType.TEXT) {
      mountText(container,vnode)
  }

}
function mountElement(container,vnode,regnode) {
    var tag = document.createElement(vnode.tag);
    var attr = vnode.attr;
    vnode.el = tag;
    for (var key in attr) {
        patchAttr(tag,key,null,attr[key]);
    }

        if (vnode.childrenFlags === ChildTyps.SINGLE){
            mount(tag,vnode.children);
        } else if (vnode.childrenFlags === ChildTyps.MULTIPLE) {
            for (let a = 0; a<vnode.children.length;a++) {
                mount(tag,vnode.children[a]);
            }
        }
    regnode?container.insertBefore(tag,regnode):container.appendChild(tag)
}
function mountText(container,vnode) {
   var tag = document.createTextNode(vnode.children);
    container.appendChild(tag)
}
//更新属性
function patchAttr(container,attr,oldValue,newValue) {
    switch (attr) {
        case 'class':
            container.className = newValue;
            break;
        case 'style':
            for (var key in newValue) {
                container.style[key] = newValue[key];
            }
             // 删除样式
                for (var a in oldValue) {
                    if(!newValue.hasOwnProperty(a)) {
                        container.style[a] = '';
                    }
                }
            break;
        default:
            if (attr.indexOf('@')!==-1) {
                console.log(oldValue);
                container.addEventListener(attr.substr(1),newValue,false)
            } else {
                // container[attr] = attrValue
                container.setAttribute(attr,newValue)
            }
    }
}
// diff算法
