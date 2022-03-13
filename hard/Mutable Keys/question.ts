/*
  5181 - Mutable Keys
  -------
  ### Question
  
  实现高级的util类型MutableKeys<T>，它将所有可变(不是只读)键挑选到一个联合中。  
  For example:
  
  ```ts
  type Keys = MutableKeys<{ readonly foo: string; bar: number }>;
  // expected to be “bar”
  ```
*/


/* _____________ Your Code Here _____________ */

type MutableKeys<T> = any


/* _____________ Test Cases _____________ */
import { Equal, Expect } from '../../utils'

type cases = [
    Expect<Equal<MutableKeys<{ a: number, readonly b: string }>, "a">>,
    Expect<Equal<MutableKeys<{ a: undefined, readonly b: undefined }>, "a">>,
    Expect<Equal<MutableKeys<{ a: undefined, readonly b?: undefined, c: string, d: null }>, "a" | "c" | "d">>,
    Expect<Equal<MutableKeys<{}>, never>>
]