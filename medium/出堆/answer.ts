type Pop<T extends any[]> = T extends [...infer L, infer R] ? L : never;

type testPop = Pop<[1,2,'3','4']>

type Shift<T extends any[]> = T extends [infer L, ...infer R] ? R : never;

type testShift = Shift<[1,2,'3','4']>

type Unshift2<T extends any[],U> = [U,...T]

type testUnshift = Unshift2<[1,2,'3','4'],22>

type Push2<T extends any[],U> = [...T,U];

type testPush = Push2<[1,2,'3','4'],77>