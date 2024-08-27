declare function PromiseAll<T extends unknown[]>(
  values: readonly [...T]
): Promise<{ [key in keyof T]: T[key] extends Promise<infer R> ? R : T[key] }>;

const promiseAllTest1 = PromiseAll([1, 2, 3] as const);
const promiseAllTest2 = PromiseAll([1, 2, Promise.resolve(3)] as const);
const promiseAllTest3 = PromiseAll([1, 2, Promise.resolve(3)]);
// 按照目标对象查找位置并插入到其后面