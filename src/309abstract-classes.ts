export {};
// 抽象クラス

abstract class Animal {
  // 抽象メソッド
  abstract cry(): string;
}

class Lion extends Animal {
  cry() {
    return "roar";
  }
}

// 抽象メソッドをオーバーライドしないと，エラーになってくれる．
// 100子とかメソッドがあった場合，抽象クラスがあると，実装漏れがなくなる．
class Tiger extends Animal {}
