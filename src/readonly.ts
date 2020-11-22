export {};

class VisaCard {
  // publicは省略できるけど，しない方が明示的でわかりやすい
  // また，readonlyの着脱がやりやすいメリットがある．
  constructor(public readonly owner: string) {}
}

let myCard = new VisaCard("hiroyuki");
console.log(myCard.owner);
// myCard.owner = "kazusa";
