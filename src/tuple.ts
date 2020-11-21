export {};
// 型の順序に制約を持たせる．

let profile: (string | number)[] = ["hiroyuki", 23];
// numberとstringが逆になってもエラーにならない．
profile = [13, "string"];

let profile2: [string, number] = ["hiroyuki", 23];
// numberとstringを逆にするとエラーになる．
// profile2 = [12, "string"];
