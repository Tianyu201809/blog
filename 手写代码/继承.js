// 圣杯继承
function inherit(target, orgin) {
  function F() { }
  F.prototype = orgin.prototype
  target.prototype = new F()
  target.prototype.constructor = target
  target.prototype.uble = orgin.prototype
}