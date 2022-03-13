/*
  2946 - ObjectEntries
  -------
  ### Question
  
  实现object。entries的类型版本

  For example 
  
  ```typescript
  interface Model {
    name: string;
    age: number;
    locations: string[] | null;
  }
  type modelEntries = ObjectEntries<Model> // ['name', string] | ['age', number] | ['locations', string[] | null];
  ```
*/


/* _____________ Your Code Here _____________ */

type ObjectEntries<T> = any


/* _____________ Test Cases _____________ */
import { Equal, Expect, ExpectFalse, NotEqual } from '../../utils'

interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}

type ModelEntries = ['name', string] | ['age', number] | ['locations', string[] | null];



type cases = [
  Expect<Equal<ObjectEntries<Model>,ModelEntries>>,
  Expect<Equal<ObjectEntries<Partial<Model>>,ModelEntries>>,
]