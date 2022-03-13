/*
  90 - Optional Keys
  -------  
  ### 题目
  
  实现高级util类型`OptionalKeys<T>`，该类型将所有可选键合并为一个并集。
*/


/* _____________ 你的代码 _____________ */

type OptionalKeys<T> = any


/* _____________ 测试用例 _____________ */
import { Equal, Expect } from '../../utils'

type cases = [
    Expect<Equal<OptionalKeys<{ a: number, b?: string }>, "b">>,
    Expect<Equal<OptionalKeys<{ a: undefined, b?: undefined }>, "b">>,
    Expect<Equal<OptionalKeys<{ a: undefined, b?: undefined, c?: string, d?: null }>, "b" | "c" | "d">>,
    Expect<Equal<OptionalKeys<{}>, never>>
]