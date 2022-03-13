/*
  651 - Length of String 2
  -------
  ### Question
  
  实现一个类型' LengthOfString<S> '，用于计算模板字符串的长度(如[298 - string的长度](https://tsch.js.org/298)):  
  ```ts
  type T0 = LengthOfString<"foo"> // 3
  ```
  
  The type must support strings several hundred characters long (the usual recursive calculation of the string length is limited by the depth of recursive function calls in TS, that is, it supports strings up to about 45 characters long).

*/


/* _____________ Your Code Here _____________ */

type LengthOfString<S extends string> = number


/* _____________ Test Cases _____________ */
import { Equal, IsTrue } from '../../utils'

type cases = [
  IsTrue<Equal<LengthOfString<"">, 0>>,
  IsTrue<Equal<LengthOfString<"1">, 1>>,
  IsTrue<Equal<LengthOfString<"12">, 2>>,
  IsTrue<Equal<LengthOfString<"123">, 3>>,
  IsTrue<Equal<LengthOfString<"1234">, 4>>,
  IsTrue<Equal<LengthOfString<"12345">, 5>>,
  IsTrue<Equal<LengthOfString<"123456">, 6>>,
  IsTrue<Equal<LengthOfString<"1234567">, 7>>,
  IsTrue<Equal<LengthOfString<"12345678">, 8>>,
  IsTrue<Equal<LengthOfString<"123456789">, 9>>,
  IsTrue<Equal<LengthOfString<"1234567890">, 10>>,
  IsTrue<Equal<LengthOfString<"12345678901">, 11>>,
  IsTrue<Equal<LengthOfString<"123456789012">, 12>>,
  IsTrue<Equal<LengthOfString<"1234567890123">, 13>>,
  IsTrue<Equal<LengthOfString<"12345678901234">, 14>>,
  IsTrue<Equal<LengthOfString<"123456789012345">, 15>>,
  IsTrue<Equal<LengthOfString<"1234567890123456">, 16>>,
  IsTrue<Equal<LengthOfString<"12345678901234567">, 17>>,
  IsTrue<Equal<LengthOfString<"123456789012345678">, 18>>,
  IsTrue<Equal<LengthOfString<"1234567890123456789">, 19>>,
  IsTrue<Equal<LengthOfString<"12345678901234567890">, 20>>,
  IsTrue<Equal<LengthOfString<"123456789012345678901">, 21>>,
  IsTrue<Equal<LengthOfString<"1234567890123456789012">, 22>>,
  IsTrue<Equal<LengthOfString<"12345678901234567890123">, 23>>,
  IsTrue<Equal<LengthOfString<"aaaaaaaaaaaaggggggggggggggggggggkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa">, 272>>,
];