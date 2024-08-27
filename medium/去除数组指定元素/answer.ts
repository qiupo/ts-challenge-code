
/* _____________ 你的代码 _____________ */
type help<U> = U extends Array<infer R> ? R : U
type Without<T, U> = T extends [infer F, ...infer P] ?
    F extends help<U> ? Without<P, U> : [F, ...Without<P, U>] : [];

/* _____________ 测试用例 _____________ */
import { Equal, Expect } from '../../utils'

type cases = [
    Expect<Equal<Without<[1, 2], 1>, [2]>>,
    Expect<Equal<Without<[1, 2, 4, 1, 5], [1, 2]>, [4, 5]>>,
    Expect<Equal<Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>, []>>
]