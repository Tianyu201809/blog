// demo-loader.js

const loaderUtils = require('loader-utils')

module.exports = function (source) {
  const options = loaderUtils.getOptions(this)
  source = source.replace(/江梨花/g, options.name)
  return `module.exports = ${JSON.stringify(source)}`
}


// 1,2,3, 5, 4,6
new Promise((resolve, reject) => {
  console.log(1)
  resolve();
})
  .then(() => {
    console.log(2);
    new Promise((resolve, reject) => {
      console.log(3)
      resolve();
    })
      .then((c) => {
        console.log(4)
      })
      .then((d) => {
        console.log(6)
      })
  }).then((b) => {
    console.log(5)
  })
