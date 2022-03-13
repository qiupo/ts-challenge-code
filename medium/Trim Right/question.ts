/*
  4803 - Trim Right
  -------
  ### 题目
  
  实现 `TrimRight<T>` ，它接收确定的字符串类型并返回一个新的字符串，其中新返回的字符串删除了原字符串结尾的空白字符串。
  
  例如
  
  ```ts
  type Trimed = TrimLeft<'  Hello World  '> // 应推导出 '  Hello World'
  ```
*/


/* _____________ 你的代码 _____________ */

type TrimRight<S extends string> = any


/* _____________ 测试用例 _____________ */
import { Equal, Expect } from '../../utils'

type cases = [
  Expect<Equal<TrimRight<'str'>, 'str'>>,
  Expect<Equal<TrimRight<'str '>, 'str'>>,
  Expect<Equal<TrimRight<'str     '>, 'str'>>,
  Expect<Equal<TrimRight<'     str     '>, '     str'>>,
  Expect<Equal<TrimRight<'   foo bar  \n\t '>, '   foo bar'>>,
]