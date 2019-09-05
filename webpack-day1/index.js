import a from './a';
import b from './b';

import img from './img/a.jpeg';
import './index.scss'

var img1 = new Image();
img1.src = img;
// img1.onclick = function(){alert()}
document.querySelector('#root').appendChild(img1);


a();
b();
function w() {
    console.log('hahaah')
}
w();