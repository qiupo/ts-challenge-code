/*
  4484 - IsTuple
  -------
  ### Question
  
  实现一个类型' ' ' ' IsTuple ' ' ' ' '，它接受一个输入类型' ' ' T ' ' ' '并返回' ' T ' ' ' '是否为元组类型。  
  For example:
  
  ```typescript
  type case1 = IsTuple<[number]> // true
  type case2 = IsTuple<readonly [number]> // true
  type case3 = IsTuple<number[]> // false
  ```

*/


/* _____________ Your Code Here _____________ */

type IsTuple<T> = any


/* _____________ Test Cases _____________ */
import { Equal, Expect, ExpectFalse, NotEqual } from '../../utils'

type cases = [
  Expect<Equal<IsTuple<[]>, true>>,
  Expect<Equal<IsTuple<[number]>, true>>,
  Expect<Equal<IsTuple<readonly [1]>, true>>,
  Expect<Equal<IsTuple<{ length: 1}>, false>>,
  Expect<Equal<IsTuple<number[]>, false>>,
]