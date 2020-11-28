export {};

// Record<K, T>

type Prefectures = "Tokyo" | "Saitama" | "Kanagawa" | "Shiga";

type Covid19InfectionInfo = {
  kanji_name: string;
  confirmed_cases: number;
};

// ↓めんどくさい．．．
// const covid19Japan: {
//   Tokyo: Covid19InfectionInfo;
//   Saitama: Covid19InfectionInfo;
//   Kanagawa: Covid19InfectionInfo;
// } = {
//   Tokyo: { kanji_name: "東京", confirmed_cases: 1960 },
//   Saitama: { kanji_name: "埼玉", confirmed_cases: 345 },
//   Kanagawa: { kanji_name: "神奈川", confirmed_cases: 2 },
// };

// Recordで簡単に型定義
const covid19Japan: Record<Prefectures, Covid19InfectionInfo> = {
  Tokyo: { kanji_name: "東京", confirmed_cases: 1960 },
  Saitama: { kanji_name: "埼玉", confirmed_cases: 345 },
  Kanagawa: { kanji_name: "神奈川", confirmed_cases: 2 },
  Shiga: { kanji_name: "滋賀", confirmed_cases: 2 },
};
