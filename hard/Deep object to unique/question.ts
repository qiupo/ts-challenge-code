/*
  553 - Deep object to unique
  -------
  ### Question
  
  TypeScript有结构类型系统，但有时你希望函数只接受一些之前定义良好的惟一对象(就像在标称类型系统中那样)，而不接受任何具有必需字段的对象。

  创建一个类型，该类型接受一个对象，并使该对象和其中所有深嵌套的对象惟一，同时保留所有对象的字符串和数字键，以及这些键上所有属性的值。
  
  原始类型和生成的唯一类型必须是可相互赋值的，但不完全相同。

  For example,
  
  ```ts
  import { Equal } from "../../utils"
  
  type Foo = { foo: 2; bar: { 0: 1 }; baz: { 0: 1 } }
  
  type UniqFoo = DeepObjectToUniq<Foo>
  
  declare let foo: Foo
  declare let uniqFoo: UniqFoo
  
  uniqFoo = foo // ok
  foo = uniqFoo // ok
  
  type T0 = Equal<UniqFoo, Foo> // false
  type T1 = UniqFoo["foo"] // 2
  type T2 = Equal<UniqFoo["bar"], UniqFoo["baz"]> // false
  type T3 = UniqFoo["bar"][0] // 1
  type T4 = Equal<keyof Foo & string, keyof UniqFoo & string> // true
  ```
*/


/* _____________ Your Code Here _____________ */

type DeepObjectToUniq<O extends object> = any


/* _____________ Test Cases _____________ */
import { Equal, IsTrue, IsFalse } from "../../utils"

type Quz = { quz: 4 }

type Foo = { foo: 2; baz: Quz; bar: Quz }
type Bar = { foo: 2; baz: Quz; bar: Quz & { quzz?: 0 } }

type UniqFoo = DeepObjectToUniq<Foo>
type UniqBar = DeepObjectToUniq<Bar>

declare let foo: Foo
declare let uniqFoo: UniqFoo

uniqFoo = foo
foo = uniqFoo

type cases = [
  IsFalse<Equal<UniqFoo, Foo>>,
  IsTrue<Equal<UniqFoo["foo"], Foo["foo"]>>,
  IsTrue<Equal<UniqFoo["bar"]["quz"], Foo["bar"]["quz"]>>,
  IsFalse<Equal<UniqFoo["bar"], UniqFoo["baz"]>>,
  IsFalse<Equal<UniqBar["baz"], UniqFoo["baz"]>>,
  IsTrue<Equal<keyof UniqBar["baz"], keyof UniqFoo["baz"]>>,
  IsTrue<Equal<keyof Foo, keyof UniqFoo & string>>
];