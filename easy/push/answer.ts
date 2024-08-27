
/* _____________ 你的代码 _____________ */

type Push<T, U> = T extends unknown[] ? [...T, U] : never


/* _____________ 测试用例 _____________ */
import { Equal, Expect, ExpectFalse, NotEqual } from '../../utils'

type cases = [
  Expect<Equal<Push<[], 1>, [1]>>,
  Expect<Equal<Push<[1, 2], '3'>, [1, 2, '3']>>,
  Expect<Equal<Push<['1', 2, '3'], boolean>, ['1', 2, '3', boolean]>>,
]
