function a() {
  this.a = '夏明'
}
a.prototype.name = function(){
  console.log(this.a)
};
module.exports = new a();