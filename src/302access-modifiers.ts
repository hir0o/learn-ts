export {};
// アクセス修飾子

// public どっからでもアクセス可能(書かないと，publicになる．)
// private オブジェクト内だけでしか使えない．(派生クラスでアクセスできない)
// protected 派生クラスでもアクセスできる

class Person {
  public name: string;
  private age: number;
  protected sex: "男" | "女";

  constructor(name: string, age: number, sex: "男" | "女") {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}, sex: ${this.sex}`;
  }
}

class Android extends Person {
  constructor(name: string, age: number, sex: "男" | "女") {
    super(name, age, sex);
  }

  profile(): string {
    // protectedだから，sexがエラーにならない
    // privateだから派生クラスで，ageがエラーになる．
    return `name: ${this.name}, age: ${this.age}, sex: ${this.sex}`;
  }
}

let taro = new Person("タロー", 14, "男");
let androidTaro = new Android("タロー", 14, "男");

console.log(taro.name);
// プライベートだからエラーになる
console.log(taro.age);

console.log(taro.profile());
