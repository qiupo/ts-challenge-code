/*
  2757 - PartialByKeys
  -------
  ### Question
  
  实现一个泛型' PartialByKeys<T, K> '，它接受两个类型参数' T '和' K '。

  ' K '指定' T '的属性集，应该设置为可选的。当没有提供' K '时，它应该使所有属性都是可选的，就像正常的' Partial<T> '一样。

  For example
  
  ```typescript
  interface User {
    name: string
    age: number
    address: string
  }
  
  type UserPartialName = PartialByKeys<User, 'name'> // { name?:string; age:number; address:string }
  ```
*/


/* _____________ Your Code Here _____________ */

type PartialByKeys<T , K> = any


/* _____________ Test Cases _____________ */
import { Equal, Expect, ExpectFalse, NotEqual } from '../../utils'

interface User {
  name: string
  age: number
  address: string
}

interface UserPartialName {
  name?: string
  age: number
  address: string 
}

interface UserPartialNameAndAge {
  name?: string
  age?: number
  address: string 
}

type cases = [
  Expect<Equal<PartialByKeys<User, 'name'>, UserPartialName>>,
  Expect<Equal<PartialByKeys<User, 'name' | 'unknown'>, UserPartialName>>,
  Expect<Equal<PartialByKeys<User, 'name' | 'age'>, UserPartialNameAndAge>>,
  Expect<Equal<PartialByKeys<User>, Partial<User>>>,
]