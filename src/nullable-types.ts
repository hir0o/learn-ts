export {};

// 値が現時点で判明しないものを扱う．
// ユニオン型で，nullを許容する．
let profile: { name: string; age: number | null } = {
  name: "hiroyuki",
  age: null,
};
