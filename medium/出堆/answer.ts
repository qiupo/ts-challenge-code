/* _____________ 你的代码 _____________ */

type Pop<T extends any[]> = T extends [...infer L, any] ? L : never;

type Shift<T extends any[]> = T extends [any, ...infer R] ? R : never;

type Unshift2<T extends any[],U> = [U,...T]

type Push2<T extends any[],U> = [...T,U];


/* _____________ 测试用例 _____________ */
import { Equal, Expect } from '../../utils'

type cases = [
  Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
  Expect<Equal<Pop<['a', 'b', 'c', 'd', ]>, ['a', 'b', 'c']>>,
]