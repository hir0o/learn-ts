export {};

// infer 引数を調べる

function add(a: number, b: number): number {
  return a + b;
}

type returnTypeFromAdd = ReturnType<typeof add>;

// infer...推論する
type MtReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any;
