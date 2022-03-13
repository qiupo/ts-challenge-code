/*
  3188 - Tuple to Nested Object
  -------
  ### Question
  
  给定一个类型为' ' T ' ' '且只包含字符串类型的元组和一个类型为' ' ' U ' ' '的元组，递归地构建一个对象。  
  ```typescript
  type a = TupleToNestedObject<['a'], string> // {a: string}
  type b = TupleToNestedObject<['a', 'b'], number> // {a: {b: number}}
  type c = TupleToNestedObject<[], boolean> // boolean. if the tuple is empty, just return the U type
  ```
*/


/* _____________ Your Code Here _____________ */

type TupleToNestedObject<T, U> = any


/* _____________ Test Cases _____________ */
import { Equal, Expect, ExpectFalse, NotEqual } from '../../utils'

type cases = [
  Expect<Equal<TupleToNestedObject<['a'], string>, {a: string}>>,
  Expect<Equal<TupleToNestedObject<['a', 'b'], number>, {a: {b: number}}>>,
  Expect<Equal<TupleToNestedObject<['a', 'b', 'c'], boolean>, {a: {b: {c: boolean}}}>>,
  Expect<Equal<TupleToNestedObject<[], boolean>, boolean>>,
]