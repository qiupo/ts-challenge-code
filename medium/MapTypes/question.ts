/*
  5821 - MapTypes
  -------
  ### Question
  
  实现' MapTypes<T, R> '，它将对象T中的类型转换为由类型R定义的不同类型，具有以下结构

  ```ts
  type StringToNumber = {
    mapFrom: string; // value of key which value is string
    mapTo: number; // will be transformed for number
  }
  ```
  
  ## Examples:
  
  ```ts
  type StringToNumber = { mapFrom: string; mapTo: number;}
  MapTypes<{iWillBeANumberOneDay: string}, StringToNumber> // gives { iWillBeANumberOneDay: number; }
  ```
  
  Be aware that user can provide a union of types:
  ```ts
  type StringToNumber = { mapFrom: string; mapTo: number;}
  type StringToDate = { mapFrom: string; mapTo: Date;}
  MapTypes<{iWillBeNumberOrDate: string}, StringToDate | StringToNumber> // gives { iWillBeNumberOrDate: number | Date; }
  ```
  
  If the type doesn't exist in our map, leave it as it was:
  ```ts
  type StringToNumber = { mapFrom: string; mapTo: number;}
  MapTypes<{iWillBeANumberOneDay: string, iWillStayTheSame: Function}, StringToNumber> // // gives { iWillBeANumberOneDay: number, iWillStayTheSame: Function }
  ```

*/


/* _____________ Your Code Here _____________ */

type MapTypes<T, R> = any


/* _____________ Test Cases _____________ */
import { Equal, Expect } from '../../utils'

type cases = [
  Expect<Equal<MapTypes<{stringToArray: string}, {mapFrom: string; mapTo: []}>, { stringToArray: [];}>>,
Expect<Equal<MapTypes<{stringToNumber: string}, {mapFrom: string; mapTo: number;}>, { stringToNumber: number;}>>,
Expect<Equal<MapTypes<{stringToNumber: string, skipParsingMe: boolean;}, {mapFrom: string; mapTo: number;}>, { stringToNumber: number; skipParsingMe: boolean;}>>,
Expect<Equal<MapTypes<{date: string}, {mapFrom: string; mapTo: Date;} | {mapFrom: string; mapTo: null;}>, {date: null | Date}>>,
Expect<Equal<MapTypes<{date: string}, {mapFrom: string; mapTo: Date | null;}>, {date: null | Date}>>,
Expect<Equal<MapTypes<{fields: Record<string, boolean>}, {mapFrom: Record<string, boolean>; mapTo: string[];}>, { fields: string[];}>>,
Expect<Equal<MapTypes<{name: string}, {mapFrom: boolean; mapTo: never;}>, { name: string;}>>,
Expect<Equal<MapTypes<{name: string, date: Date}, {mapFrom: string; mapTo: boolean;} | {mapFrom: Date; mapTo: string;}>, {name: boolean; date: string;}>>,
]