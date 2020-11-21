export {};

// 別名だからイコールいる．
type ObjectType = {
  name: string;
  age: number;
};

// イコール書かない．
interface ObjectInterface {
  name: string;
  age: number;
}

let object: ObjectInterface = {
  name: "hiroyuki",
  age: 23,
};

console.log(object);
