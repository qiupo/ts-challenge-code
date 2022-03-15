type Equal<L, R> = (<T>() => T extends R ? 1 : 2) extends <T>() => T extends L
  ? 1
  : 2
  ? true
  : false;
type Includes<T extends readonly any[], U> = T extends [infer F, ...infer S]
  ? Equal<F, U> extends true
    ? true
    : Includes<S, U>
  : false;

type testEqual = Includes<[{ a: "A" }], { readonly a: "A" }>;
type testEqual1 = Includes<["a", "b"], "a">;
type testEqual2 = Includes<["a", "b", 1], "c">;
type x = <T>() => T extends "a" ? true : false;
type y = <T>() => T extends "b" ? true : false;
type z = x extends y ? true : false;
