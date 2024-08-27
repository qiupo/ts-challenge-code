/* _____________ 你的代码 _____________ */

type First<T extends any[]> = T extends [infer First, ...any] ? First : never;


/* _____________ 测试用例 _____________ */
import { Equal, Expect } from '../../utils'

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>
]
