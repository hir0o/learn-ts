export {};

// 違う型の属性を併せ持つ型を作る

type Pitcher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  battingAverage: number;
};

const DaimajinSasaki: Pitcher1 = {
  throwingSpeed: 154,
};

const OchiaiHiromitsu: Batter1 = {
  battingAverage: 0.367,
};

// type TowWayPlayer = {
//   throwingSpeed: number;
//   battingAverage: number;
// };

/// Pitcher1 と Batter1 の型を併せ持つ型
type TowWayPlayer = Pitcher1 & Batter1;

const OtaniShohei: TowWayPlayer = {
  throwingSpeed: 165,
  battingAverage: 0.285,
};
