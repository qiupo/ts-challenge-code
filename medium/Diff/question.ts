/*
  645 - Diff
  -------
  ### Question
  
  获取' O '和' O1 '之间的差值' Object '
  
*/


/* _____________ Your Code Here _____________ */

type Diff<O, O1> = any


/* _____________ Test Cases _____________ */
import { Equal, Expect } from '../../utils'

type Foo = {
  name: string
  age: string
}
type Bar = {
  name: string
  age: string
  gender: number
}

type cases = [
  Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
  Expect<Equal<Diff<Bar,Foo>, { gender: number }>>
]