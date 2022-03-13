/*
  59 - Get Optional
  -------
  ### 题目
  
  实现高级util类型`GetOptional<T>`，该类型保留所有可选字段
  
  例如
  
  ```ts
  type I = GetOptional<{ foo: number, bar?: string }> // expected to be { bar?: string }
  ```
*/


/* _____________ 你的代码 _____________ */

type GetOptional<T> = any


/* _____________ 测试用例 _____________ */
import { Equal, Expect } from '../../utils'

type cases = [
    Expect<Equal<GetOptional<{ foo: number, bar?: string }>, { bar?: string }>>,
    Expect<Equal<GetOptional<{ foo: undefined, bar?: undefined }>, { bar?: undefined }>>,
]