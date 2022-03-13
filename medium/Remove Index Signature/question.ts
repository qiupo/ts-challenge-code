/*
  1367 - Remove Index Signature
  -------
  ### Question
  
  实现' RemoveIndexSignature<T> '，从对象类型中排除索引签名。  
  For example:
  
  ```
  
  type Foo = {
    [key: string]: any;
    foo(): void;
  }
  
  type A = RemoveIndexSignature<Foo>  // expected { foo(): void }
  
  ```
*/


/* _____________ Your Code Here _____________ */

type RemoveIndexSignature<T> = any


/* _____________ Test Cases _____________ */
import { Equal, Expect } from '../../utils'


type Foo = {
  [key: string]: any;
  foo(): void;
}


type Bar = {
  [key: number]: any;
  bar(): void;
}

type Baz = {
  bar(): void;
  baz: string
}


type cases = [
  Expect<Equal< RemoveIndexSignature<Foo>, { foo(): void }>>,
  Expect<Equal< RemoveIndexSignature<Bar>, { bar(): void }>>,
  Expect<Equal< RemoveIndexSignature<Baz>, { bar(): void, baz: string }>>
]