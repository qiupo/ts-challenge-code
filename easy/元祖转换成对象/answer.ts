type TupleToObject<T extends readonly any[]> = {
  [key in T[number]]: key;
};
const test = ["5", 6, Symbol] as const;

type test = TupleToObject<typeof test>

type getPa<T extends unknown[]> = T[number]; //获取数组类型中的联合类型
const arr=[1,'2',true]
type x = getPa<typeof arr>;

type arr3 = ["5", 6, true];

type getPa3<T extends unknown[]> = T extends [infer F, ...infer R]
  ? F extends true
    ? true
    : F | getPa3<R>
  : never; //获取数组类型中的值为联合类型
type x3 = getPa3<arr3>;

type getPa2<T extends unknown[],K=T[number]> = {
  [key in K extends keyof any
    ? K
    : K extends boolean | undefined
    ? `${K}`
    : never]: key;
};

type arr2 = ["5", 6, true, symbol,null,undefined];
type x2 = getPa2<arr2>;
