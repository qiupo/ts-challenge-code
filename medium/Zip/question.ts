/*
  4471 - Zip
  -------
  ### Question
  
  在这个挑战中，你应该实现一个类型' Zip<T, U> '， T和U必须是' Tuple '  ```ts
  
  type exp = Zip<[1, 2], [true, false]> // expected to be [[1, true], [2, false]]
  ```
*/


/* _____________ Your Code Here _____________ */

type Zip = any


/* _____________ Test Cases _____________ */
import { Equal, Expect } from '../../utils'

type cases = [
  Expect<Equal<Zip<[], []>, []>>,
  Expect<Equal<Zip<[1, 2], [true, false]>, [[1, true], [2, false]]>>,
  Expect<Equal<Zip<[1, 2, 3], ['1', '2']>, [[1, '1'], [2, '2']]>>,
  Expect<Equal<Zip<[], [1, 2, 3]>, []>>,
  Expect<Equal<Zip<[[1, 2]], [3]>, [[[1, 2], 3]]>>,
]