type Push<T, U> = T extends unknown[] ? [...T, U] : never;

type arr = [1, "2", true];

type pushArr = Push<arr, "3">;
type pushArr2 = Push<arr, false>;
