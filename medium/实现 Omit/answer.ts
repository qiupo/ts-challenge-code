
/* _____________ 你的代码 _____________ */

type MyOmit<T, K> = { [key in keyof T as key extends K ? never : key]: T[key] }


/* _____________ 测试用例 _____________ */
import { Equal, Expect } from '../../utils'

type cases = [
    Expect<Equal<Expected1, MyOmit<Todo, 'description'>>>,
    Expect<Equal<Expected2, MyOmit<Todo, 'description' | 'completed'>>>
]

interface Todo {
    title: string
    description: string
    completed: boolean
}

interface Expected1 {
    title: string
    completed: boolean
}

interface Expected2 {
    title: string
}
