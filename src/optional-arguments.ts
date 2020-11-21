export {};

let bmi: (height: number, weight: number, isOutput?: boolean) => number = (
  height: number,
  weight: number,
  isOutput?: boolean
): number => {
  const bmi: number = weight / (height * height);
  if (isOutput) {
    console.log({ bmi });
  }
  return bmi;
};

bmi(1.23, 123);
