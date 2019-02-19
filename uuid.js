const uuid = require('uuid/v4');

for (var a=0;a<5;a++){
    console.log(uuid().replace(/\-/g,''))
}
