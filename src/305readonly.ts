export {};

// readonlyは，代入ができない．

class VisaCard {
  // publicは省略できるけど，しない方が明示的でわかりやすい
  // また，readonlyの着脱がやりやすいメリットがある．
  constructor(public readonly owner: string) {}
}

let myCard = new VisaCard("hiroyuki");
// 読み取りはできる．
console.log(myCard.owner);
// 代入はできない．
myCard.owner = "kazusa";
