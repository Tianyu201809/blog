
const arr = [1, 2, 3, 4, [1, 2, 3, [1, , 2, 3]], 5, "string", { name: 'xxx' }]

// 1. concat + 递归
function flat1(arr) {
  let arrResult = []
  arr.forEach(item => {
    if (Array.isArray(item)) {
      arrResult.push(...flat1(item))
    } else {
      arrResult.push(item)
    }
  });
  return arrResult
}

// reduce
function flat3(arr) {
  return arr.reduce((pre, curr) => {
    return pre.concat(Array.isArray(curr) ? flat3(curr) : curr)
  }, [])
}