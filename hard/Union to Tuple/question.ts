/*
  730 - Union to Tuple
  -------
  ### Question
  
  实现一个类型“UnionToTuple”，它将一个联合转换为一个元组。

  正如我们所知，联合是一种无序结构，但tuple是一种有序结构，这意味着当创建或转换联合时，我们不应该假定在一个联合的项之间会保持任何顺序。

  因此，在这个挑战中，输出元组中任何元素的排列都是可以接受的。

  您的类型应该解析为以下两种类型之一，但***不是***它们的联合!
```ts
  UnionToTuple<1>           // [1], and correct
  UnionToTuple<'any' | 'a'> // ['any','a'], and correct
  ```
  or 
  ```ts
  UnionToTuple<'any' | 'a'> // ['a','any'], and correct
  ```
  It shouldn't be a union of all acceptable tuples...
  ```ts
  UnionToTuple<'any' | 'a'> // ['a','any'] | ['any','a'], which is incorrect
  ```
  
  
  And a union could collapes, which means some types could absorb (or be absorbed by) others and there is no way to prevent this absorption. See the following examples:
  ```ts
  Equal<UnionToTuple<any | 'a'>,       UnionToTuple<any>>         // will always be a true
  Equal<UnionToTuple<unknown | 'a'>,   UnionToTuple<unknown>>     // will always be a true
  Equal<UnionToTuple<never | 'a'>,     UnionToTuple<'a'>>         // will always be a true
  Equal<UnionToTuple<'a' | 'a' | 'a'>, UnionToTuple<'a'>>         // will always be a true
  ```
*/


/* _____________ Your Code Here _____________ */

type UnionToTuple<T> = any


/* _____________ Test Cases _____________ */
import {Equal, Expect} from '../../utils'

type ExtractValuesOfTuple<T extends any[]> = T[keyof T & number]

type cases = [
    Expect<Equal<UnionToTuple<'a' | 'b'>['length'], 2>>,
    Expect<Equal<ExtractValuesOfTuple<UnionToTuple<'a' | 'b'>>, 'a' | 'b'>>,
    Expect<Equal<ExtractValuesOfTuple<UnionToTuple<'a'>>, 'a'>>,
    Expect<Equal<ExtractValuesOfTuple<UnionToTuple<any>>, any>>,
    Expect<Equal<ExtractValuesOfTuple<UnionToTuple<undefined | void | 1>>, void | 1>>,
    Expect<Equal<ExtractValuesOfTuple<UnionToTuple<any | 1>>, any | 1>>,
    Expect<Equal<ExtractValuesOfTuple<UnionToTuple<any | 1>>, any>>,
    Expect<Equal<ExtractValuesOfTuple<UnionToTuple<'d' | 'f' | 1 | never>>, 'f' | 'd' | 1>>,
    Expect<Equal<ExtractValuesOfTuple<UnionToTuple<[{ a: 1 }] | 1>>, [{ a: 1 }] | 1>>,
    Expect<Equal<ExtractValuesOfTuple<UnionToTuple<never>>, never>>,
    Expect<Equal<ExtractValuesOfTuple<UnionToTuple<'a' | 'b' | 'c' | 1 | 2 | 'd' | 'e' | 'f' | 'g'>>, 'f' | 'e' | 1 | 2 | 'g' | 'c' | 'd' | 'a' | 'b'>>,
]