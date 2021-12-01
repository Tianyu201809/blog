// c = ?
a = 0, c = 0;
do {
  --c
  a = a - 1
}
while (a > 0)
console.log(c)

// a=? b = ?
let a = Math.round(11.5)
let b = Math.round(-11.5)
console.log(a, b)

// d = ?
let d = (10 / 3) * 2 % 5
console.log(d)


// 翻转字符串
const d = Array.prototype.reverse.apply('aaaiisishyds'.split('')).join('')
console.log(d)

// 检查遍历类型
const p = Object.prototype.toString.call([])
console.log(p)