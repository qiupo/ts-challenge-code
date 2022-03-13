type First<T extends any[]> = T extends [infer R, ...unknown[]] ? R : never;
type fTest1 = First<['a','b','c']>
type fTest2 = First<[boolean,'b','c']>
type fTest3 = First<[1,'b','c']>
type fTest4 = First<[false,'b','c']>
