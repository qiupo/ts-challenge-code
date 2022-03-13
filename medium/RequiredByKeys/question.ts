/*
  2759 - RequiredByKeys
  -------
  ### Question
  
  实现一个泛型' RequiredByKeys<T, K> '，它接受两个类型参数' T '和' K '。

  “K”指定了“T”的属性集，这些属性应该被设置为必需的。当没有提供' K '时，它应该使所有属性都是必需的，就像正常的' required <T> '一样。

  For example
  
  ```typescript
  interface User {
    name?: string
    age?: number
    address?: string
  }
  
  type UserPartialName = RequiredByKeys<User, 'name'> // { name: string; age?: number; address?: string }
  
  ```
*/


/* _____________ Your Code Here _____________ */

type RequiredByKeys<T , K> = any


/* _____________ Test Cases _____________ */
import { Equal, Expect, ExpectFalse, NotEqual } from '../../utils'

interface User {
  name?: string
  age?: number
  address?: string
}

interface UserRequiredName {
  name: string
  age?: number
  address?: string 
}

interface UserRequiredNameAndAge {
  name: string
  age: number
  address?: string 
}

type cases = [
  Expect<Equal<RequiredByKeys<User, 'name'>, UserRequiredName>>,
  Expect<Equal<RequiredByKeys<User, 'name' | 'unknown'>, UserRequiredName>>,
  Expect<Equal<RequiredByKeys<User, 'name' | 'age'>, UserRequiredNameAndAge>>,
  Expect<Equal<RequiredByKeys<User>, Required<User>>>,
]