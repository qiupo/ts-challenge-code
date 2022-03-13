/*
  270 - Typed Get
  -------
  ### Question
  
  lodash中的[' get '函数](https://lodash.com/docs/4.17.15#get)是访问JavaScript中嵌套值的一个非常方便的助手。
  然而，当我们谈到TypeScript时，使用这样的函数会让你丢失类型信息。
  随着TS 4.1即将到来的[模板文字类型](https://devblogs.microsoft.com/typescript/announcing-typescript-4-1-beta/#template-literal-types)功能
  正确输入' get '成为可能。你能实现它吗?

  For example,
  
  ```ts
  type Data = {
    foo: {
      bar: {
        value: 'foobar',
        count: 6,
      },
      included: true,
    },
    hello: 'world'
  }
    
  type A = Get<Data, 'hello'> // 'world'
  type B = Get<Data, 'foo.bar.count'> // 6
  type C = Get<Data, 'foo.bar'> // { value: 'foobar', count: 6 }
  ```
  
  Accessing arrays is not required in this challenge.
*/


/* _____________ Your Code Here _____________ */

type Get<T, K> = string


/* _____________ Test Cases _____________ */
import { Equal, Expect } from '../../utils'

type cases = [
  Expect<Equal<Get<Data, 'hello'>, 'world'>>,
  Expect<Equal<Get<Data, 'foo.bar.count'>, 6>>,
  Expect<Equal<Get<Data, 'foo.bar'>, { value: 'foobar', count: 6 }>>,

  Expect<Equal<Get<Data, 'no.existed'>, never>>,
]

type Data = {
  foo: {
    bar: {
      value: 'foobar',
      count: 6,
    },
    included: true,
  },
  hello: 'world'
}