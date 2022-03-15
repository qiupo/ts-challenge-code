type MyExclude<T, U> = T extends U ? never : T;

type testExclude = MyExclude<"a" | true | 123, "a">;
