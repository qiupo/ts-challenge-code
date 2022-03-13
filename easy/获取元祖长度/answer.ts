type Length<T extends any> = T extends readonly [...infer U]
  ? U extends readonly unknown[]
    ? U["length"]
    : Length<U>
  : never;
let count =['1','2','3','4','5'] as const;
type lTest1 = Length<5>
type lTest2 = Length<'hellow world'>
type lTest3 = Length<['1','2','3','4']>
type lTest4 = Length<typeof count>