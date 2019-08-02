import ReacDom from './k-react-Dom.js';

function createElement(jsx) {  // 转化为虚拟dom
    var docu = document.createDocumentFragment();
    docu =docu.appendChild(document.createElement('div'));
    docu.innerHTML = jsx;
    var parent = docu.firstChild;
    console.log(Vdom(parent))
    // console.log(parent.attributes[0].nodeValue)
}
function Vdom(parent) {
    var vnode = {};
    vnode.children = [];
    console.log(parent.attributes)
    vnode.el = parent.nodeName.toLocaleLowerCase();
    if (!parent.children.length) return vnode;
    var len = parent.children.length;


    while (len) {
        var node = parent.children[len-1];
        len--;
        vnode.children.push(Vdom(node));
    }
    return vnode;
}

class component {

}

export default {
    createElement,
    component
}