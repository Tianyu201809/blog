class EventEmitter {
  constructor() {
    this.cache = {}
  }
  // 订阅
  on(name, fn) {
    if (this.cache[name]) {
      this.cache[name].push(fn)
    } else {
      this.cache[name] = [fn]
    }
  }
  // 取消
  off() { }
  // 触发
  emit(name, once = false) {

  }
}