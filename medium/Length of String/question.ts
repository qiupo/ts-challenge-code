/*
  298 - Length of String
  -------
  ### Question
  
  计算字符串字面值的长度，其行为类似于' string #length '。
  
*/


/* _____________ Your Code Here _____________ */

type LengthOfString<S extends string> = any


/* _____________ Test Cases _____________ */
import { Equal, Expect } from '../../utils'

type cases = [
  Expect<Equal<LengthOfString<''>, 0>>,
  Expect<Equal<LengthOfString<'kumiko'>, 6>>,
  Expect<Equal<LengthOfString<'reina'>, 5>>,
  Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>,
]