export {};
// より厳密な型
// 文字列と数値のリテラル型はよく使うよ．

let dayObTheWeek: "月" | "火" | "水" | "木" | "金" | "土" | "日" = "日";
dayObTheWeek = "月";
// dayObTheWeek = "13"; // エラー

let month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 = 1;

month = 12;
// month = 13; // エラー

let TRUE: true = true;
