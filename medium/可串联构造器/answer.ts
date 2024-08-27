
/* _____________ 你的代码 _____________ */

type Chainable<R = {}> = {
    option<U extends string, V>(key: U, value: V): Chainable<{ [K in keyof R | U]: K extends keyof R ? R[K] : V }>
    get(): R
  }
  
  
  /* _____________ 测试用例 _____________ */
  import { Alike, Expect } from '../../utils'
  
  declare const a: Chainable
  
  const result1 = a
    .option('foo', 123)
    .option('bar', { value: 'Hello World' })
    .option('name', 'type-challenges')
    .get()
  
  const result2 = a
    .option('name', 'another name')
    // @ts-expect-error
    .option('name', 'last name')
    .get()
  
  type cases = [
    Expect<Alike<typeof result1, Expected1>>,
    Expect<Alike<typeof result2, Expected2>>,
  ]
  
  type Expected1 = {
    foo: number
    bar: {
      value: string
    }
    name: string
  }
  
  type Expected2 = {
    name: string
  }  