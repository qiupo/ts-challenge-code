/*
  147 - C-printf Parser
  -------
  ### Question
  
  C语言中有一个函数:' printf '。这个函数允许我们打印格式化的内容。是这样的:  
  ```c
  printf("The result is %d.", 42);
  ```
  
  This challenge requires you to parse the input string and extract the format placeholders like `%d` and `%f`. For example, if the input string is `"The result is %d."`, the parsed result is a tuple `['dec']`.
  
  Here is the mapping:
  
  ```typescript
  type ControlsMap = {
    c: 'char',
    s: 'string',
    d: 'dec',
    o: 'oct',
    h: 'hex',
    f: 'float',
    p: 'pointer',
  }
  ```
*/


/* _____________ Your Code Here _____________ */

type ControlsMap = {
    c: 'char',
    s: 'string',
    d: 'dec',
    o: 'oct',
    h: 'hex',
    f: 'float',
    p: 'pointer',
  }
  
  type ParsePrintFormat = any
  
  
  /* _____________ Test Cases _____________ */
  import { Equal, Expect } from '../../utils'
  
  type cases = [
    Expect<Equal<ParsePrintFormat<''>, []>>,
    Expect<Equal<ParsePrintFormat<'Any string.'>, []>>,
    Expect<Equal<ParsePrintFormat<'The result is %d.'>, ['dec']>>,
    Expect<Equal<ParsePrintFormat<'The result is %%d.'>, []>>,
    Expect<Equal<ParsePrintFormat<'The result is %%%d.'>, ['dec']>>,
    Expect<Equal<ParsePrintFormat<'The result is %f.'>, ['float']>>,
    Expect<Equal<ParsePrintFormat<'The result is %h.'>, ['hex']>>,
    Expect<Equal<ParsePrintFormat<'The result is %q.'>, []>>,
    Expect<Equal<ParsePrintFormat<'Hello %s: score is %d.'>, ['string', 'dec']>>,
    Expect<Equal<ParsePrintFormat<'The result is %'>, []>>
  ]  