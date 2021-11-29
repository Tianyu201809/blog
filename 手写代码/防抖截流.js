// 防抖
function debounce(fn, delay = 3000) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

// 截流
function throttle(fn, delay = 3000) {
  let date1 = "";
  return function (...args) {
    let currentDate = Date.now();
    if (!date1 || currentDate - date1 > delay) {
      date1 = currentDate
      fn.apply(this, args);
    }
  };
}