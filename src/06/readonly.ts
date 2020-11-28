export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: "ひろゆき",
  age: 12,
};

me.age++;

console.log(me);

// readonlyだけの型を作る
type PersonalDattaType = Readonly<Profile>;

const friend: PersonalDattaType = {
  name: "かずさ",
  age: 22,
};

// readonlyだから，エラーになる．
// friend.age++;

// 中身を作ってみる
type OriginalReadOnly<T> = { readonly [P in keyof T]: T[P] };

type OriginalPersonalDataType = OriginalReadOnly<Profile>;
