
/* _____________ 你的代码 _____________ */

type Unshift<T, U> = T extends unknown[] ? [U, ...T] : never


/* _____________ 测试用例 _____________ */
import { Equal, Expect, ExpectFalse, NotEqual } from '../../utils'

type cases = [
  Expect<Equal<Unshift<[], 1>, [1]>>,
  Expect<Equal<Unshift<[1, 2], 0>, [0, 1, 2,]>>,
  Expect<Equal<Unshift<['1', 2, '3'],boolean>, [boolean, '1', 2, '3']>>,
]
