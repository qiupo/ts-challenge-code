type Concat<T, U> = T extends unknown[]
  ? U extends unknown[]
    ? [...T, ...U]
    : never
  : never;

type testConcat1 = ['1','2',3];
type testConcat2 = ['5','6',true];

type arr = Concat<testConcat1,testConcat2>