/*
  847 - String Join
  -------
  ### Question
  
  创建一个类型安全的字符串连接工具，可以这样使用:  
  ```ts
  const hyphenJoiner = join('-')
  const result = hyphenJoiner('a', 'b', 'c'); // = 'a-b-c'
  ```
  
  Or alternatively:
  ```ts
  join('#')('a', 'b', 'c') // = 'a#b#c'
  ```
  
  When we pass an empty delimiter (i.e '') to join, we should concat the strings as they are, i.e: 
  ```ts
  join('')('a', 'b', 'c') // = 'abc'
  ```
  
  When only one item is passed, we should get back the original item (without any delimiter added):
  ```ts
  join('-')('a') // = 'a'
  ```
*/


/* _____________ Your Code Here _____________ */

declare function join(delimiter: any): (...parts: any[]) => any;


/* _____________ Test Cases _____________ */
import { Equal, Expect } from '../../utils'

// Edge cases
const noCharsOutput = join('-')();
const oneCharOutput = join('-')('a');
const noDelimiterOutput = join('')('a', 'b', 'c');

// Regular cases
const hyphenOutput = join('-')('a', 'b', 'c');
const hashOutput = join('#')('a', 'b', 'c');
const twoCharOutput = join('-')('a', 'b');
const longOutput = join('-')('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h');

type cases = [
    Expect<Equal<typeof noCharsOutput, ''>>,
    Expect<Equal<typeof oneCharOutput, 'a'>>,
    Expect<Equal<typeof noDelimiterOutput, 'abc'>>,
    Expect<Equal<typeof twoCharOutput, 'a-b'>>,
    Expect<Equal<typeof hyphenOutput, 'a-b-c'>>,
    Expect<Equal<typeof hashOutput, 'a#b#c'>>,
    Expect<Equal<typeof longOutput, 'a-b-c-d-e-f-g-h'>>,
]