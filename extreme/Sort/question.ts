/*
  741 - Sort
  -------
  ### Question
  
  在这个挑战中，要求您按照升序或下降顺序对自然数数组进行排序。  
  Ascend order examples:
  ```ts
  Sort<[]> // []
  Sort<[1]> // [1]
  Sort<[2, 4, 7, 6, 6, 6, 5, 8, 9]> //  [2, 4, 5, 6, 6, 6, 7, 8, 9]
  ```
  
  The `Sort` type should also accept a boolean type. When it is `true`, the sorted result should be in descent order. Some examples:
  
  ```ts
  Sort<[3, 2, 1], true> // [3, 2, 1]
  Sort<[3, 2, 0, 1, 0, 0, 0], true> // [3, 2, 1, 0, 0, 0, 0]
  ```
  
  Extra challenges:
  1. Support natural numbers with 15+ digits.
  2. Support float numbers.
*/


/* _____________ Your Code Here _____________ */

type Sort = any


/* _____________ Test Cases _____________ */
import { Equal, Expect } from '../../utils'

type cases = [
    Expect<Equal<Sort<[]>, []>>,
    Expect<Equal<Sort<[1]>, [1]>>,
    Expect<Equal<Sort<[2, 1]>, [1, 2]>>,
    Expect<Equal<Sort<[0, 0, 0]>, [0, 0, 0]>>,
    Expect<Equal<Sort<[1, 2, 3]>, [1, 2, 3]>>,
    Expect<Equal<Sort<[3, 2, 1]>, [1, 2, 3]>>,
    Expect<Equal<Sort<[3, 2, 1, 2]>, [1, 2, 2, 3]>>,
    Expect<Equal<Sort<[3, 2, 0, 1, 0, 0, 0]>, [0, 0, 0, 0, 1, 2, 3]>>,
    Expect<Equal<Sort<[2, 4, 7, 6, 6, 6, 5, 8, 9]>, [2, 4, 5, 6, 6, 6, 7, 8, 9]>>,
    Expect<Equal<Sort<[1, 1, 2, 1, 1, 1, 1, 1, 1]>, [1, 1, 1, 1, 1, 1, 1, 1, 2]>>,
    Expect<Equal<Sort<[], true>, []>>,
    Expect<Equal<Sort<[1], true>, [1]>>,
    Expect<Equal<Sort<[2, 1], true>, [2, 1]>>,
    Expect<Equal<Sort<[0, 0, 0], true>, [0, 0, 0]>>,
    Expect<Equal<Sort<[1, 2, 3], true>, [3, 2, 1]>>,
    Expect<Equal<Sort<[3, 2, 1], true>, [3, 2, 1]>>,
    Expect<Equal<Sort<[3, 2, 1, 2], true>, [3, 2, 2, 1]>>,
    Expect<Equal<Sort<[3, 2, 0, 1, 0, 0, 0], true>, [3, 2, 1, 0, 0, 0, 0]>>,
    Expect<Equal<Sort<[2, 4, 7, 6, 6, 6, 5, 8, 9], true>, [9, 8, 7, 6, 6, 6, 5, 4, 2]>>
]