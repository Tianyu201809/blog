// call
Function.prototype.call = function (context, ...args) {
  context = context || window;
  const fn = Symbol("fn");
  context[fn] = this;
  let result = context[fn](...args);
  delete context[fn];
  return result;
};

// apply
Functio.prototype.apply = function (context, args) {
  context = context || window;
  if (Array.isArray(args)) {
    const fn = Symbol("fn");
    context[fn] = this;
    let result = context[fn](args);
    delete context[fn];
    return result;
  } else {
    throw new Error("错误");
  }
};