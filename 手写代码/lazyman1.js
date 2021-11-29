/**
 * lazyman
 * 解决思路：队列机制
 */

class lazyMan {
  constructor(name) {
    this.queue = []
    this.name = name
    setTimeout(() => {
      console.log(`我叫${this.name}`)
      this.next()
    }, 0)
  }
  sleep(time) {
    const fn = setTimeout(() => {
      console.log('睡了')
      this.next()
    }, time * 1000)
    this.queue.push(fn)
    return this
  }
  sleepFirst(time) {
    const fn = setTimeout(() => {
      console.log('睡了')
      this.next()
    }, time * 1000)
    this.queue.unshift(fn)
    return this
  }
  eat(type) {
    const _type = type === 'lunch' ? '午饭' : '晚饭'
    const fn = () => {
      console.log(_type)
    }
    this.queue.push(fn)
    this.next()
    return this
  }
  next() {
    const task = this.queue.unshift()
    task && task()
  }
}