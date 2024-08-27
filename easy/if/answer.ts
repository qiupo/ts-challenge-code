
/* _____________ 你的代码 _____________ */

type If<C, T, F> = C extends true ? T : F


/* _____________ 测试用例 _____________ */
import { Equal, Expect } from '../../utils'

type cases = [
  Expect<Equal<If<true, 'a', 'b'>, 'a'>>,
  Expect<Equal<If<false, 'a', 2>, 2>>,
]

// @ts-expect-error
type error = If<null, 'a', 'b'>



