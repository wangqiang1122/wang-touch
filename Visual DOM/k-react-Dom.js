
import Vdom from './Vdom.js';

function render(jsx,el) {
    el.appendChild(Vdom.initVnode(jsx));
}



export default { render }