/* _____________ 你的代码 _____________ */

// type TupleToUnion<T> = T extends any[] ? T[number] : never;

// type TupleToUnion<T> = T extends [...infer A, infer rest] ? TupleToUnion<A> | rest : never;

type TupleToUnion<T> = T extends Array<infer R> ? R : never;


/* _____________ 测试用例 _____________ */
import { Equal, Expect } from '../../utils'

type cases = [
  Expect<Equal<TupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>,
]
