function deepCopy(source) {
  if (!isObject(source)) return source
  let target = Array.isArray(source) ? [] : {}
  for (const k in source) {
    if (typeof source[k] === 'object') {
      target[k] = deepCopy(source[k])
    } else {
      target[k] = source[k]
    }
  }
  return target
}
function isObject(obj) {
  return typeof obj === 'object' && obj !== null
}