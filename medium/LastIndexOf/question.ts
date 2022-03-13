/*
  5317 - LastIndexOf
  -------
  ### Question
  
  实现Array的类型版本。> ' ' ' ' '接受数组' ' T ' ' '，任何' ' U ' ' ' '并返回最后一个' ' U ' ' '在数组' ' T ' ' ' ' ' ' ' ' ' ' ' '  
  For example:
  
  ```typescript
  type Res1 = LastIndexOf<[1, 2, 3, 2, 1], 2> // 3
  type Res2 = LastIndexOf<[0, 0, 0], 2> // -1
  ```
*/


/* _____________ Your Code Here _____________ */

type LastIndexOf<T, U> = any


/* _____________ Test Cases _____________ */
import { Equal, Expect, ExpectFalse, NotEqual } from '../../utils'

type cases = [
  Expect<Equal<LastIndexOf<[1, 2, 3, 2, 1], 2>, 3>>,
  Expect<Equal<LastIndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>, 7>>,
  Expect<Equal<LastIndexOf<[0, 0, 0], 2>, -1>>,
]