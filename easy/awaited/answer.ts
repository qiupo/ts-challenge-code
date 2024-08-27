
/* _____________ 你的代码 _____________ */

type MyAwaited<T> = T extends Promise<infer R> ? MyAwaited<R> : T

/* _____________ 测试用例 _____________ */
import { Equal, Expect } from '../../utils'

type X = Promise<string>
type Y = Promise<{ field: number }>
type Z = Promise<Promise<string | number>>

type cases = [
  Expect<Equal<MyAwaited<X>, string>>,
  Expect<Equal<MyAwaited<Y>, { field: number }>>,
  Expect<Equal<MyAwaited<Z>, string | number>>,
]

// @ts-expect-error
type error = MyAwaited<number>
