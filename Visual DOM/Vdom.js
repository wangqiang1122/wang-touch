

function initVnode(nodes) {  // 虚拟dom转化为真实dom

  if (nodes.el) {
      return createNode(nodes)
  } else {
      return document.createTextNode(nodes.children[0]);
  }
}

function createNode(nodes) { // 建立真实dom树
    var lists = nodes;
    var v = document.createElement(lists.el);
    if (lists.props) {
        // console.log(Object.keys(lists.props))
        Object.keys(lists.props).forEach(item => {
          if (item=='class') {
              v.className = lists.props[item]
          }
        });
    }
     var children = lists.children;
    // 有自元素处理递归
    children.forEach(item => {
        v.appendChild(initVnode(item))
    })
    return v
}


export default {
    initVnode,
    createNode
};