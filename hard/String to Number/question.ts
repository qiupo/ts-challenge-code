/*
  300 - String to Number
  -------
  ### Question
  
  将字符串字面量转换为数字，其行为类似于' number . parseint '。
*/


/* _____________ Your Code Here _____________ */

type ToNumber<S extends string> = any


/* _____________ Test Cases _____________ */
import { Equal, Expect } from '../../utils'

type cases = [
  Expect<Equal<ToNumber<'0'>, 0>>,
  Expect<Equal<ToNumber<'5'>, 5>>,
  Expect<Equal<ToNumber<'12'>, 12>>,
  Expect<Equal<ToNumber<'27'>, 27>>,
]