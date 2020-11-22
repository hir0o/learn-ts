export {};

// (1) namespaceで名前空間を作成
namespace Javanese {
  // (2)外から見えるようにexportが必要
  export class Person {
    constructor(public name: string) {}
  }
}
// (4) 名前空間をさらにネストしたい時
namespace Javanese {
  // (5)export namespace をネストする
  export namespace Nagoya {
    export class Person {
      constructor(public name: string) {}
    }
  }
  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

// (3) 名前空間下のクラスのインスタンスを作成
const me = new Javanese.Person("hiroyuki");

// (6) ネストされた名前空間
const you = new Javanese.Nagoya.Person("hiroyuki");

console.log(me.name);
