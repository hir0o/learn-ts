export {};
// デフォルトパラメータ

const nextYearSalary = (currentSalary: number, rate: number = 1.05): number => {
  return currentSalary * rate;
};

console.log(nextYearSalary(1000));
