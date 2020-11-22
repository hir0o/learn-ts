export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = "hiroyuki";
  static lastName: string = "shibuya";

  static work(): string {
    return `Hey!! My name is ${this.firstName} ${this.lastName}`;
  }
}

let me = new Me();
// staticメンバーに直接アクセスできない．
// console.log(me.isProgrammer);

// static メンバーは，クラス本体からアクセスできる．
console.log(Me.isProgrammer);

console.log(Me.work());
