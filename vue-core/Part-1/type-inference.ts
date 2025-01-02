// 类型推断
function foo<T extends any>(val: T): T {
  return val;
}

const res = foo("str");
