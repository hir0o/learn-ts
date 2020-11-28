export {};

let numbers: number[] = [1, 2, 3];

// 別の書き方
// Arrayは，interface
// <> は，ジェネリクス
let numbers2: Array<number> = [1, 2, 3, 4];
let strings2: Array<string> = ["tokyo", "nagoya"];

// numbers.forEach((num) => console.log(num));

let strings: string[] = ["ts", "js", "js"];

// 二次元配列
let nihi: number[][] = [
  [50, 100],
  [150, 300],
];

// | は，orって意味がある．
// 教養型？
let arr: (string | number | boolean)[] = [1, "string", false];
