export {};

// * owner
//   * 所有者
//   * 初期化時に設定できる
//   * 途中で変更できないようにする
//   * 参照できないようにする
// * secretNumber
//   * 個人番号
//   * 初期化時に設定できる
//   * 途中で変更できる
//   * 参照できない

class MyNumberCard {
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  // 値をゲットする時
  get owner() {
    return this._owner;
  }

  // 値をセットする時
  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }
}

const card = new MyNumberCard("hiroyuki", 123456789);
console.log(card.owner);

card.secretNumber = 1237;

console.log(card);
