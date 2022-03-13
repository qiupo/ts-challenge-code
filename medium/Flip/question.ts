/*
  4179 - Flip
  -------
  ### Question
  
  实现' just-flip-object '的类型。例子:  
  ```typescript
  Flip<{ a: "x", b: "y", c: "z" }>; // {x: 'a', y: 'b', z: 'c'}
  Flip<{ a: 1, b: 2, c: 3 }>; // {1: 'a', 2: 'b', 3: 'c'}
  flip<{ a: false, b: true }>; // {false: 'a', true: 'b'}
  ```
  
  No need to support nested objects and values which cannot be object keys such as arrays

*/


/* _____________ Your Code Here _____________ */

type Flip<T> = any


/* _____________ Test Cases _____________ */
import { Equal, Expect, NotEqual } from '../../utils'

type cases = [
  Expect<Equal<{a: 'pi'}, Flip<{pi: 'a'}>>>,
  Expect<NotEqual<{b: 'pi'}, Flip<{pi: 'a'}>>>,
  Expect<Equal<{3.14: 'pi', true: 'bool'}, Flip<{pi: 3.14, bool: true}>>>,
  Expect<Equal<{val2: 'prop2', val: 'prop'}, Flip<{prop: 'val', prop2: 'val2'}>>>,
]