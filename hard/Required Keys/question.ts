/*
  89 - Required Keys
  -------
  ### 题目
  
  实现高级util类型`RequiredKeys<T>`，该类型将所有必需的键都选择为一个并集。
  
  例如
  
  ```ts
  type Result = RequiredKeys<{ foo: number; bar?: string }>;
  // expected to be “foo”
  ```
*/


/* _____________ 你的代码 _____________ */

type RequiredKeys<T> = any


/* _____________ 测试用例 _____________ */
import { Equal, Expect } from '../../utils'

type cases = [
    Expect<Equal<RequiredKeys<{ a: number, b?: string }>, "a">>,
    Expect<Equal<RequiredKeys<{ a: undefined, b?: undefined }>, "a">>,
    Expect<Equal<RequiredKeys<{ a: undefined, b?: undefined, c: string, d: null }>, "a" | "c" | "d">>,
    Expect<Equal<RequiredKeys<{}>, never>>
]