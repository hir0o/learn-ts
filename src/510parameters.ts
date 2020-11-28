export {};

// parameters
// ある関数の引数を扱いたい時に使うユーティリティ型
// 他人のライブラリの引数型を抜き出して使うとか．
const debugProfile = (name: string, age: number) => {
  console.log({ name, age });
};

debugProfile("hiroyuki", 23);

type Profile = Parameters<typeof debugProfile>;

const profile: Profile = ["kazusa", 23];

debugProfile(...profile);

type Parameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;
