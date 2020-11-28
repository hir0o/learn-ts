export {};

type DebugType = () => void;
type SomeTypes = string | number | DebugType;

// Exclude 型を除外する
// stringとnumber型を除外する
type FunctionType = Exclude<SomeTypes, string | number>;
// debug型だけを除外する
type nunFunctionType = Exclude<SomeTypes, DebugType>;
// 関数の型だけを除外する(Functionは，関数型の総称)
type typeExcludingFunction = Exclude<SomeTypes, Function>;

// Extract 型を取り出す
// DebugTypeだけを取り出す
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;
// stringとnumberだけ取り出す
type NonFunctionTypeByExtract = Extract<SomeTypes, string | number>;
// 関数の型だけを取り出す
type FunctionTypeExtractingFunction = Extract<SomeTypes, Function>;

// nonnullable
type NullableTypes = string | number | null | undefined;
// ulllとundefindを除外する
type NonNullableTypes = NonNullable<NullableTypes>;
