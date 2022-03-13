/*
  5140 - Trunc
  -------
  ### Question
  
  实现' ' Math的类型版本。Trunc ' ' ' '，它接受字符串或数字，并通过删除任何小数位数返回数字的整数部分。  
  For example:
  
  ```typescript
  type A = Trunc<12.34> // 12
  ```
*/


/* _____________ Your Code Here _____________ */

type Trunc = any


/* _____________ Test Cases _____________ */
import { Equal, Expect, ExpectFalse, NotEqual } from '../../utils'

type cases = [
  Expect<Equal<Trunc<0.1>, '0'>>,
  Expect<Equal<Trunc<1.234>, '1'>>,
  Expect<Equal<Trunc<12.345>, '12'>>,
  Expect<Equal<Trunc<-5.1>, '-5'>>,
  Expect<Equal<Trunc<'1.234'>, '1'>>,
  Expect<Equal<Trunc<'-10.234'>, '-10'>>,
  Expect<Equal<Trunc<10>, '10'>>,
]