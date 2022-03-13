/*
  517 - Multiply
  -------
  ### Question
  实现一个类型' Sum< a, B> '，对两个非负整数求和，并以字符串形式返回求和结果。数字可以指定为字符串、数字或bigint。

  **此挑战从[476 - Sum](https://tsch.js.org/476)开始，建议您先完成该挑战，并在此基础上修改您的代码以启动此挑战。**

  实现一个类型'乘法< a, B> '，它将两个非负整数相乘，并以字符串形式返回它们的乘积。数字可以指定为字符串、数字或bigint。

  For example,
  
  ```ts
  type T0 = Multiply<2, 3> // '6'
  type T1 = Multiply<3, '5'> // '15'
  type T2 = Multiply<'4', 10> // '40'
  type T3 = Multiply<0, 16> // '0'
  type T4 = Multiply<'13', '21'> // '273'
  type T5 = Multiply<'43423', 321543n> // '13962361689'
  ```
*/


/* _____________ Your Code Here _____________ */

type Multiply<A extends string | number | bigint, B extends string | number | bigint> = string


/* _____________ Test Cases _____________ */
import { Equal, Expect } from '../../utils'

type cases = [
  Expect<Equal<Multiply<2, 3>, '6'>>,
  Expect<Equal<Multiply<3, '5'>, '15'>>,
  Expect<Equal<Multiply<'4', 10>, '40'>>,
  Expect<Equal<Multiply<0, 16>, '0'>>,
  Expect<Equal<Multiply<'13', '21'>, '273'>>,
  Expect<Equal<Multiply<'43423', 321543n>, '13962361689'>>,
  Expect<Equal<Multiply<9999, 1>, '9999'>>,
  Expect<Equal<Multiply<4325234, '39532'>, '170985150488'>>,
  Expect<Equal<Multiply<100_000n, '1'>, '100000'>>,
  Expect<Equal<Multiply<259, 9125385>, '2363474715'>>,
  Expect<Equal<Multiply<9, 99>, '891'>>,
  Expect<Equal<Multiply<315, '100'>, '31500'>>,
  Expect<Equal<Multiply<11n, 13n>, '143'>>,
  Expect<Equal<Multiply<728, 0>, '0'>>,
  Expect<Equal<Multiply<'0', 213>, '0'>>,
  Expect<Equal<Multiply<0, '0'>, '0'>>
]