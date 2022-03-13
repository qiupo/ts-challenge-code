/*
  4425 - Greater Than
  -------
  ### Question

  在这个挑战中，你应该实现一个类型' GreaterThan<T, U> '，就像' T > U '

  负数不需要考虑。

  For example
  
  ```ts
  GreaterThan<2, 1> //should be true
  GreaterThan<1, 1> //should be false
  ```
  
  Good Luck!
*/


/* _____________ Your Code Here _____________ */

type GreaterThan<T extends number, U extends number> = any


/* _____________ Test Cases _____________ */
import { Equal, Expect } from '../../utils'

type cases = [
  Expect<Equal<GreaterThan<1, 0>, true>>,
  Expect<Equal<GreaterThan<5, 4>, true>>,
  Expect<Equal<GreaterThan<4, 5>, false>>,
  Expect<Equal<GreaterThan<0, 0>, false>>,
  Expect<Equal<GreaterThan<20, 20>, false>>
]