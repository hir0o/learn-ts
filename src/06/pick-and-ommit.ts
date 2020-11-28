export {};

type DetaildProfile = {
  name: string;
  height: number;
  weight: number;
};

// Pick
// 必要なプロパティだけ抜き出す
// nameとstringだけ使う
// 第二引数はプロパティ名が入る
// 補完がきく
type SimpleOrofile = Pick<DetaildProfile, "name" | "weight">;

// Ommit
type SmallProfile = Omit<DetaildProfile, "height">;

type MyOmit = Pick<DetaildProfile, "name" | "weight">;
type MySmallProfile = MyOmit;
