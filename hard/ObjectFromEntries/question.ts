/*
  2949 - ObjectFromEntries
  -------
  ### Question
  
  实现object。fromentries的类型版本  
  For example:
  
  ```typescript
  interface Model {
    name: string;
    age: number;
    locations: string[] | null;
  }
  
  type ModelEntries = ['name', string] | ['age', number] | ['locations', string[] | null];
  
  type result = ObjectFromEntries<ModelEntries> // expected to be Model
  ```
*/


/* _____________ Your Code Here _____________ */

type ObjectFromEntries<T> = any


/* _____________ Test Cases _____________ */
import { Equal, Expect, ExpectFalse, NotEqual } from '../../utils'

interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}

type ModelEntries = ['name', string] | ['age', number] | ['locations', string[] | null];


type cases = [
  Expect<Equal<ObjectFromEntries<ModelEntries>,Model>>,
]