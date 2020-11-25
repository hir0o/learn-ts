export {};

// オブジェクトの添字アクセス
// index シグネチャの書き方
// { [ index: typeFirIndex ]: typeForValue }

interface Profile {
  underTwenty: boolean;
  name: string;
  [index: string]: string | number | boolean;
}

let profile: Profile = { name: "hiroyuki", underTwenty: false };

profile.name = "Hamu";
profile.age = 123;

console.log(profile);
