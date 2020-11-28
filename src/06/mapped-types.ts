export {};

type Profile = {
  name?: number;
  age: number;
};

type PartialProfule = Partial<Profile>;
type PropertyTypes = keyof Profile;

type Optional<T> = { [P in keyof T]?: T[P] | null };
type OptionlProfile = Optional<Profile>;
