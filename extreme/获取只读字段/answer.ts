/* _____________ 你的代码 _____________ */

type GetReadonlyKeys<T> =keyof {
  [key in keyof T as (<U>() => U extends { [P in key]: T[P] } ? 1 : 2) extends <U>() => U extends { readonly [P in key]: T[P] } ? 1 : 2
  ? key
  : never]: never;
}


/* _____________ 测试用例 _____________ */
import { Equal, Expect } from '../../utils'

type cases = [
  Expect<Equal<'title', GetReadonlyKeys<Todo1>>>,
  Expect<Equal<'title' | 'description', GetReadonlyKeys<Todo2>>>,
]

interface Todo1 {
  readonly title: string
  description: string
  completed: boolean
}

interface Todo2 {
  readonly title: string
  readonly description: string
  completed?: boolean
}