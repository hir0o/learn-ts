export {};

// 関数の戻り値を定義する

function add(a: number, b: number): number {
  return a + b;
}

console.log(add(1, 2));

// 返り血の型(number)を取り出す
type returnTypeFromAdd = ReturnType<typeof add>;
