/*
  6141 - Binary to Decimal
  -------
  ### Question
  
 实现' BinaryToDecimal<S> '，它接受由0和1组成的精确字符串类型' S '，并在' S '被视为二进制时返回与' S '对应的精确数字类型。
 你可以假设S的长度等于或小于8并且S不是空的。

  ```ts
  type Res1 = BinaryToDecimal<'10'>; // expected to be 2
  type Res2 = BinaryToDecimal<'0011'>; // expected to be 3
  ```
*/


/* _____________ Your Code Here _____________ */

type BinaryToDecimal<S extends string> = any


/* _____________ Test Cases _____________ */
import { Equal, Expect } from '../../utils'

type cases = [
  Expect<Equal<BinaryToDecimal<'10'>, 2>>,
  Expect<Equal<BinaryToDecimal<'0011'>, 3>>,
  Expect<Equal<BinaryToDecimal<'00000000'>, 0>>,
  Expect<Equal<BinaryToDecimal<'11111111'>, 255>>,
  Expect<Equal<BinaryToDecimal<'10101010'>, 170>>,
]