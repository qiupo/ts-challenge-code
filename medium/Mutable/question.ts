/*
  2793 - Mutable
  -------
  ### Question
  
  实现通用的' ' ' mutab< T> ' ' '使' ' T ' ' '中的所有属性是可变的(不是只读的)。  
  For example
  
  ```typescript
  interface Todo {
    readonly title: string
    readonly description: string
    readonly completed: boolean
  }
  
  type MutableTodo = Mutable<Todo> // { title: string; description: string; completed: boolean; }
  
  ```
*/


/* _____________ Your Code Here _____________ */

type Mutable<T> = any


/* _____________ Test Cases _____________ */
import { Equal, Expect, ExpectFalse, NotEqual } from '../../utils'

interface Todo1 {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}

type cases = [
  Expect<Equal<Mutable<Readonly<Todo1>>, Todo1>>,
]