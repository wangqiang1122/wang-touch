import ReacDom from './k-react-Dom.js';

function createElement(jsx) {  // 转化为虚拟dom
    var docu = document.createDocumentFragment();
    docu =docu.appendChild(document.createElement('div'));
    docu.innerHTML = jsx;
    var parent = docu.firstChild;
    // console.log(Vdom(parent))
    return Vdom(parent)
    // console.log(parent.attributes[0].nodeValue)
}
function Vdom(parent) {
    var vnode = {};
    vnode.children = [];
    if (parent.nodeType===3) {
        vnode.children.push(parent.nodeValue);
        return vnode;
    }
    var attrs = parent.attributes;
    var nodes = parent.childNodes;
    // 属性
    if (attrs.length) {
        vnode.props = {};
        for (var a=0;a<attrs.length;a++) {
            vnode.props[attrs[a].name] = attrs[a].value
        }
    }
    vnode.el = parent.nodeName.toLocaleLowerCase();
    if (!parent.childNodes.length) return vnode;
    var len = parent.childNodes.length;
    while (len) {
        var node = parent.childNodes[len-1];
        len--;
        vnode.children.push(Vdom(node));
    }
    vnode.children.reverse();
    return vnode;
}

class component {

}

export default {
    createElement,
    component
}