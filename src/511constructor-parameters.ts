export {};

// コンストラクタの引数を抜き取る

class Person {
  constructor(public name: string, public age: number) {}
}

let taro = new Person("taro", 35);

console.log(taro);

type PersonType = typeof Person;

type Profile = ConstructorParameters<PersonType>;

const profile: Profile = ["kazu", 22];
const lazu = new Person(...profile);

console.log(lazu);

type MyConstructorParameters<
  T extends new (...args: any) => any
> = T extends new (...args: infer P) => any ? P : never;
