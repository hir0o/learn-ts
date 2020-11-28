export {};

// type命令について

// stringの別名
type Mojiretsu = string;

let nameString: string = "hiroyuki";
let nameMojiretsu: Mojiretsu = "hiroyuki";

const example1 = {
  name: "hiroyuki",
  age: 1,
};

type Profile = {
  name: string;
  age: number;
};

const example2: Profile = {
  name: "hiroyuki",
  age: 1,
};

// example1の型を取り出す．
type Profile2 = typeof example1;
