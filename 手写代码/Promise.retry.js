// 重试
Promise.retry = function (fn, times) {
  return new Promise((resolve, reject) => {
    try {
      while (times--) {
        let res = await fn()
        resolve(res)
        break
      }
    } catch (error) {
      if (!times) reject(error)
    }
  })
}


Promise.retry = function (fn, times) {
  return new Promise(async (resolve, reject) => {
    try {
      while (times--) {
        let res = await fn()
        resolve(res)
        break
      }
    } catch (error) {
      if (!times) reject(error)
    }
  })
}