export {};

type Profile = {
  name: string;
  age?: number;
  zipCode: number;
};

// Profile型のオプショナルな型を作る．
type PertialType = Partial<Profile>;

// 全部必須な型を作る
type RequeiredType = Required<Profile>;
