/* _____________ 你的代码 _____________ */

type Last<T extends any[]> = T extends [...any, infer Last] ? Last : never

/* _____________ 测试用例 _____________ */
import { Equal, Expect } from '../../utils'

type cases = [
  Expect<Equal<Last<[3, 2, 1]>, 1>>,
  Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>,
]