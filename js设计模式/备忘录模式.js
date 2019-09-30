/**
 *  此js支持对某个特定功能的一次备忘录 模式的一次模拟
 *  并不具备通用性
 *
 *
 */

function Yaru(obj) {
    this.history = [];
    this.push = function (obj) {
        this.history.push(obj)
    }
    this.print = function () {
        console.log(this.history)
    }
    this.re = function () {
        return this.history
    }
}