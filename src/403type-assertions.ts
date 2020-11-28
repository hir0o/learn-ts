export {};

let name: string = "hiroyuki";

// 型アサーション
// let length = name.length as number;
// この形は推奨されてない．jsxの記法と似てる型．
let length = (name as string).length;

length = "foo";
