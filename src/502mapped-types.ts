export {};

type Profile = {
  name?: number;
  age: number;
};

type PartialProfule = Partial<Profile>;
type PropertyTypes = keyof Profile; // type PropertyTypes = "name" | "age"

type MyOptional<T> = { [P in keyof T]?: T[P] };
type OptionlProfile = MyOptional<Profile>;
