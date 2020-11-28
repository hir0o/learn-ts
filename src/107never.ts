export {};
// 関数の呼びもとに戻らない．
// おそらく，エラーハンドリングでしか使わない？

function error(message: string): never {
  throw new Error(message);
}

try {
  let result = error("テスト");
  console.log({ result });
} catch (error) {
  console.log({ error });
}

// voidとneverの違い
// voidは，戻り値がないが，呼びもとに帰ってくる．
// neverは，そもそも呼びもとに帰ってこない．

let foo: void = undefined;
let bar: never = error("only me!");

// 例外処理はnever型を使う！
