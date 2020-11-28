export {};

// 静的メンバ
// クラス本体からアクセスできる．
// インスタンスからはアクセスできない．

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
console.log(me.isProgrammer);

// staticメソッドを実行できない．
console.log(me.work);

// staticメンバーは，クラス本体からアクセスできる．
console.log(Me.isProgrammer);

// staticメソッドを実行できる．
console.log(Me.work());
