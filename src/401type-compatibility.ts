export {};

let fooCompatible: any;
let berCompatible: string = "TypeScript";

console.log(typeof fooCompatible);

fooCompatible = berCompatible;

// any型にstring型を入れると，型がstring型になる．
console.log(typeof fooCompatible);

let fooIncompatible: string;
let barIncompatible: number = 1;

// 型の互換性が無いから，エラーになる．
// fooIncompatible = barIncompatible;

let fooString: string;
let barString: string = "String";

fooString = barString;

let fooStringLiteral: "string" = "string";

// String Literal型は，Stringの集合の一部なので，代入できる．
fooString = fooStringLiteral;

let fooNumber: number;
let fooNumberLiteral: 123 = 123;

// これも互換性があるから大丈夫
fooNumber = fooNumberLiteral;

interface Animal {
  age: number;
  name: string;
}

class Peraon {
  constructor(public age: number, public name: string) {}
}

let me: Animal;

// 互換性があるから代入できる
me = new Peraon(43, "hiro");
