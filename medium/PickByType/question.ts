/*
  2595 - PickByType
  -------
  ### Question
  
  从“T”中，选择一组类型可赋给“U”的属性。  
  For Example
  
  ```typescript
  type OnlyBoolean = PickByType<{
    name: string
    count: number
    isReadonly: boolean
    isEnable: boolean
  }, boolean> // { isReadonly: boolean; isEnable: boolean; }
  ```
*/


/* _____________ Your Code Here _____________ */

type PickByType<T, U> = any


/* _____________ Test Cases _____________ */
import { Equal, Expect } from '../../utils'

interface Model {
  name: string
  count: number
  isReadonly: boolean
  isEnable: boolean
}

type cases = [
  Expect<Equal<PickByType<Model, boolean>, { isReadonly: boolean; isEnable: boolean }>>,
  Expect<Equal<PickByType<Model, string>, { name: string }>>,
  Expect<Equal<PickByType<Model, number>, { count: number }>>,
]