export {};

// 単にobject型だと，制約が緩い．
let profile: object = { name: "hiroyuki" };
profile = { age: 123 };

// プロパティに対してのテーション
let profile2: { name: string } = { name: "hiroyuki" };
// profile2 = { age: 1 }; // エラー
