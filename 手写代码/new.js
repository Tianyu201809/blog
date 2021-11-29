function myNew(func, ...args) {
  // 创建空对象
  const instance = {}
  // __proto__指向prototype
  if (func.prototype) {
    Object.setPrototypeOf(instance, func.prototype)
  }
  // 执行构造函数
  const res = func.apply(instance, args)
  if (typeof res === 'function' || (typeof res) === 'object' && res !== null) return res
  return instance
}