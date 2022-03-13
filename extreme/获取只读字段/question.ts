/*
  5 - 获取只读字段
  -------
  ### 题目
  
  实现泛型`GetReadonlyKeys<T>`，该`GetReadonlyKeys<T>`返回对象的只读键的并集。
  
  例如
  
  ```ts
  interface Todo {
    readonly title: string
    readonly description: string
    completed: boolean
  }
  
  type Keys = GetReadonlyKeys<Todo> // expected to be "title" | "description"
  ```
*/


/* _____________ 你的代码 _____________ */

type GetReadonlyKeys<T> = any


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