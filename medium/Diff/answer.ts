
/* _____________ Your Code Here _____________ */

type Diff<O, O1> = Omit<(O & O1), keyof (O | O1)>

type x = keyof (Foo | Bar)
type y = Foo & Bar;


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
    Expect<Equal<Diff<Bar, Foo>, { gender: number }>>
]