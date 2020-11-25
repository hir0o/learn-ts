export {};

// const echo = (arg: number): number => {
//   return arg;
// }

// const echo = (arg: string): string => {
//   return arg;
// }

// 型を呼び出しがわで任意の型にできる
const echo = <T>(arg: T): T => {
  return arg;
};

console.log(echo<number>(100));
console.log(echo<string>("Hello!"));
console.log(echo<boolean>(true));

// クラスをジェネリクスにする．
class Mirror<T> {
  constructor(public value: T) {}

  echo(): T {
    return this.value;
  }
}

console.log(new Mirror<number>(123).echo());
console.log(new Mirror<string>("hello").echo());
console.log(new Mirror<boolean>(true).echo());
console.log(
  new Mirror<number[]>([1, 2, 3]).echo()
);
