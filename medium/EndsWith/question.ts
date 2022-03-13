/*
  2693 - EndsWith
  -------
  ### Question
  
  实现' EndsWith<T, U> '，它接受两个精确的字符串类型，并返回是否' T '以' U '结束
*/


/* _____________ Your Code Here _____________ */

type EndsWith<T extends string, U extends string> = any


/* _____________ Test Cases _____________ */
import { Equal, Expect, ExpectFalse, NotEqual } from '../../utils'

type cases = [
  Expect<Equal<EndsWith<'abc', 'bc'>, true>>,
  Expect<Equal<EndsWith<'abc', 'abc'>, true>>,
  Expect<Equal<EndsWith<'abc', 'd'>, false>>,
]