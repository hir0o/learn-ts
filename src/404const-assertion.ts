export {};

let name = "hiroyuki";

name = "shibuya";

// let nuckname: 'ham' と同じになる．
let nuckname = "ham" as const;
nuckname = "hiroyuki";

// オブジェクトは，属性が，readonlyになる．
let profile = {
  name: "kazusa",
  height: 179,
} as const;

profile.name = "tinami";
profile.height = 123;
