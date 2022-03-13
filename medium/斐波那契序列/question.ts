/*
  4182 - 斐波那契序列
  -------
  ### 题目
  
  实现一个通用的Fibonacci\<T\>接受一个数字T并返回它对应的[Fibonacci number](https://en.wikipedia.org/wiki/Fibonacci_number)。  
  The sequence starts:
  1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
  
  For example
  ```js
  type Result1 = Fibonacci<3> // 2
  type Result2 = Fibonacci<8> // 21
  ```
*/


/* _____________ 你的代码 _____________ */

type Fibonacci<T extends number> = any


/* _____________ 测试用例 _____________ */
import { Equal, Expect } from '../../utils'

type cases = [
  Expect<Equal<Fibonacci<3>, 2>>,
  Expect<Equal<Fibonacci<8>, 21>>,
]