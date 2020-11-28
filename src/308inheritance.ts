export {};
// 継承

class Animal {
  constructor(public name: string) {}
  run(): string {
    return "I can run";
  }
}

class Lion extends Animal {
  public speed: number;

  // 初期化が，親と子のどちらともでやっていると，ちょっと気持ち悪い
  // constructor(public name: string, public speed: number) {

  // 宣言を明示的にする．
  constructor(name: string, speed: number) {
    super(name);

    this.speed = speed;
  }
  run(): string {
    // 親クラスのrun()を実行する
    return `${super.run()} ${this.speed}km/h.`;
  }
}

let ani = new Animal("animal");
console.log(ani.run());

let myLion = new Lion("ライオンちゃん", 80);
console.log(myLion.name);
console.log(myLion.run());
