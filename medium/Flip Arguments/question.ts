/*
  3196 - Flip Arguments
  -------
  ### Question

  实现lodash的``` `` _flip ```的类型版本。

  类型' ' ' ' FlipArguments<T> ' ' ' '要求函数类型' ' ' T ' ' '并返回一个新的函数类型，该函数类型具有相同的返回类型T，但参数相反。

  For example:
  
  ```typescript
  type Flipped = FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void> 
  // (arg0: boolean, arg1: number, arg2: string) => void
  ```

*/


/* _____________ Your Code Here _____________ */

type FlipArguments<T> = any


/* _____________ Test Cases _____________ */
import { Equal, Expect, ExpectFalse, NotEqual } from '../../utils'

type cases = [
  Expect<Equal<FlipArguments<() => boolean>, () => boolean>>,
  Expect<Equal<FlipArguments<(foo: string) => number>, (foo: string) => number>>,
  Expect<Equal<FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void>, (arg0: boolean, arg1: number, arg2: string) => void>>
]