
/* _____________ 你的代码 _____________ */

type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : never


/* _____________ 测试用例 _____________ */
import { Equal, Expect, ExpectFalse, NotEqual } from '../../utils'

const foo = (arg1: string, arg2: number): void => {}
const bar = (arg1: boolean, arg2: {a: 'A'}): void => {}
const baz = (): void => {}

type cases = [
  Expect<Equal<MyParameters<typeof foo>, [string, number]>>,
  Expect<Equal<MyParameters<typeof bar>, [boolean, {a: 'A'}]>>,
  Expect<Equal<MyParameters<typeof baz>, []>>,
]
