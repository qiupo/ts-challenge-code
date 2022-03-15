type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer R
) => unknown
  ? R
  : never;

const foo = (arg1: string, arg2: number): void => {};
const bar = (arg1: boolean, arg2: { a: "A" }): void => {};
const baz = (): void => {};

type testPa = MyParameters<typeof foo>
type testPa2 = MyParameters<typeof baz>
type testPa3 = MyParameters<typeof bar>
