/*
  10 - 元组转合集
  -------
  ### 题目
  
  实现泛型`TupleToUnion<T>`，它返回元组所有值的合集。
  
  例如
  
  ```ts
  type Arr = ['1', '2', '3']
  
  type Test = TupleToUnion<Arr> // expected to be '1' | '2' | '3'
  ```
*/


/* _____________ 你的代码 _____________ */

type TupleToUnion<T> = any


/* _____________ 测试用例 _____________ */
import { Equal, Expect } from '../../utils'

type cases = [
  Expect<Equal<TupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>,
]
