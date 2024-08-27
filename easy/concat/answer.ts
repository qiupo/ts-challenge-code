
/* _____________ 你的代码 _____________ */

type Concat<T, U> = T extends unknown[] ? U extends unknown[] ? [...T, ...U] : never : never

/* _____________ 测试用例 _____________ */
import { Equal, Expect } from '../../utils'

type cases = [
  Expect<Equal<Concat<[], []>, []>>,
  Expect<Equal<Concat<[], [1]>, [1]>>,
  Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Concat<['1', 2, '3'], [false, boolean, '4']>, ['1', 2, '3', false, boolean, '4']>>,
]


