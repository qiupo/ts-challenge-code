/*
  599 - Merge
  -------  
  ### Question
  
  将两个类型合并为一个新类型。第二种类型的键将覆盖第一种类型的键。
*/


/* _____________ Your Code Here _____________ */

type Merge<F, S> = any;


/* _____________ Test Cases _____________ */
import { Equal, Expect } from '../../utils'

type Foo = {
  a: number;
  b: string;
};
type Bar = {
  b: number;
  c: boolean;
};

type cases = [
  Expect<Equal<Merge<Foo, Bar>, {
	a: number;
	b: number;
	c: boolean;
  }>>
]