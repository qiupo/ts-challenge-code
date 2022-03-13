/*
  216 - Slice
  -------
  ### Question
  
  实现JavaScript的数组。类型系统中的Slice函数。' Slice<Arr, Start, End> '接受tree参数。输出应该是' Arr '从索引' Start '到' End '的子数组。负数的索引应该从相反的方向计数。  
  For example
  
  ```ts
  type Arr = [1, 2, 3, 4, 5]
  type Result = Slice<Arr, 2, 4> // expected to be [3, 4]
  ```
*/


/* _____________ Your Code Here _____________ */

type Slice<Arr, Start, End> = any


/* _____________ Test Cases _____________ */
import { Equal, Expect } from '../../utils'

type Arr = [1, 2, 3, 4, 5]

type cases = [
  // basic
  Expect<Equal<Slice<Arr, 0, 1>, [1]>>,
  Expect<Equal<Slice<Arr, 0, 0>, []>>,
  Expect<Equal<Slice<Arr, 2, 4>, [3, 4]>>,

  // optional args
  Expect<Equal<Slice<[]>, []>>,
  Expect<Equal<Slice<Arr>, Arr>>,
  Expect<Equal<Slice<Arr, 0>, Arr>>,
  Expect<Equal<Slice<Arr, 2>, [3, 4, 5]>>,

  // negative index
  Expect<Equal<Slice<Arr, 0, -1>, [1,2,3,4]>>,
  Expect<Equal<Slice<Arr, -3, -1>, [3,4]>>,

  // invalid
  Expect<Equal<Slice<Arr, 10>, []>>,
  Expect<Equal<Slice<Arr, 1, 0>, []>>,
  Expect<Equal<Slice<Arr, 10, 20>, []>>,
]