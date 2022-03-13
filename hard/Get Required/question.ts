/*
  57 - Get Required
  -------
  ### 题目
  
  实现高级util类型`GetRequired<T>`，该类型保留所有必填字段
  
  例如
  
  ```ts
  type I = GetRequired<{ foo: number, bar?: string }> // expected to be { foo: number }
  ```
*/


/* _____________ 你的代码 _____________ */

type GetRequired<T> = any


/* _____________ 测试用例 _____________ */
import { Equal, Expect } from '../../utils'

type cases = [
    Expect<Equal<GetRequired<{ foo: number, bar?: string }>, { foo: number }>>,
    Expect<Equal<GetRequired<{ foo: undefined, bar?: undefined }>, { foo: undefined }>>,
]