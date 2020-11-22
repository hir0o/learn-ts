export {};
// シグネチャー

function double(value: number): number;
function double(value: string): string;

// 関数の実態では，anyで宣言する
// シグネチャーで型を定義しているから大丈夫
function double(value: any): any {
  if (typeof value === "string") {
    return value + value;
  } else {
    return value * 2;
  }
}

console.log(double(123));
console.log(double("go! "));
// anyだけど，シグネチャーで型を宣言しているから，エラーになる．
// console.log(double(true));
