export {};

class Person {
  // アクセス修飾子をつけると，勝手に初期化してくれる．
  constructor(public name: string, protected age: number) {}
}

const me = new Person("hiroyuki", 23);
console.log(me);
