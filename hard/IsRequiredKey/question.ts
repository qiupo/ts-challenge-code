/*
  2857 - IsRequiredKey
  -------
  ### Question
  
  实现一个通用的' ' ' IsRequiredKey<T, K> ' ' ' '返回是否' ' K ' ' '是' ' T ' ' ' ' '的必需键。  
  For example
  
  ```typescript
  type A = IsRequiredKey<{ a: number, b?: string },'a'> // true
  type B = IsRequiredKey<{ a: number, b?: string },'b'> // false
  type C = IsRequiredKey<{ a: number, b?: string },'b' | 'a'> // false
  ```
*/


/* _____________ Your Code Here _____________ */

type IsRequiredKey<T, K extends keyof T> = any


/* _____________ Test Cases _____________ */
import { Equal, Expect, ExpectFalse, NotEqual } from '../../utils'

type cases = [
    Expect<Equal<IsRequiredKey<{ a: number, b?: string },'a'>, true>>,
    Expect<Equal<IsRequiredKey<{ a: number, b?: string },'b'>, false>>,
    Expect<Equal<IsRequiredKey<{ a: number, b?: string },'b' | 'a'>, false>>,
]