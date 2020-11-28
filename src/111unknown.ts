export {};
// any型より，ちょっと型安全？

const kasoku = (): number => 43;

// なんの値が入るかわからない．
let numberAny: any = kasoku();
let numberUnknown: unknown = kasoku();

let samAny = numberAny + 10;
// unknown型だと，エラーになる．
// let numberUnknown = numberAny + 10;
// if文で囲んで，型を確認するとエラーにならない．
// typeガードっていう
if (typeof numberUnknown === "number") {
  let samUnknown = numberUnknown + 10;
}
