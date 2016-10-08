//递归形式
//函数中用到了f和n
//f(3)=6;
f = function(n) {
  if (n < 2) return 1;
  else return n * f(n - 1);
}

console.log('f(3):' + f(3));

//将函数自身作为参数传入
//f(f,3)=6;
f = function(func, n) {
  if (n < 2) return 1;
  else return n * func(func, n - 1);
}

console.log('f(f,3):' + f(f, 3));

//写成参数唯一，且返回值为函数的形式
//f(f)(3)=6
f = function(func) {
  return function(n) {
    if (n < 2) return 1;
    else return n * func(func)(n - 1);
  }
}

console.log('f(f)(3):' + f(f)(3));


//使用匿名函数形式完成调用自身
//f(3)=6
f = (function(func_b) {
  return func_b(func_b);
})(
  function(func_a) {
    return function(n) {
      if (n < 2) return 1;
      else return n * func_a(func_a)(n - 1);
    }
  }
)

console.log('f(3):' + f(3));
