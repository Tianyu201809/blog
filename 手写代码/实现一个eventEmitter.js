class EventEmiter {
  constructor() {
    this.events = {}
  }
  // 执行
  emit(event, ...args) {
    this.events[event].forEach((fn) => {
      fn.apply(this, args)
    })
  }
  // 监听
  on(event, fn) {
    if (this.events[event]) {
      this.events[event].push(fn)
    } else {
      this.events[event] = [fn]
    }

  }
  // 移除
  remove(event) {
    delete this.events[event]
  }

}



class EventEmiter {
  constructor() {
    this.events = {}
  }
  on(event, fn) {
    if (this.events[event]) {
      this.events[event].push(fn)
    } else {
      this.events[event] = [fn]
    }
  }
  off(event) {
    delete this.events[event]
  }
  emit(event, ...args) {
    this.events[event].forEach((fn) => {
      fn.apply(this, args)
    })
  }
}

/**
 * 测试
 */

const eventHub = new EventEmiter()

eventHub.on('test', data => {
  console.log(data)
})

eventHub.emit('test', 1)