/*
  223 - IsAny
  -------
  ### Question
  
  有时它是有用的检测，如果你有一个值与' any '类型。
  这在处理第三方Typescript模块时尤其有用，因为第三方模块可以在模块API中导出' any '值。当您抑制implicitAny检查时，了解' any '也是很好的。

  让我们写一个实用程序类型' IsAny<T> '，它接受输入类型' T '。如果' T '为' any '，则返回' true '，否则返回' false '。

*/


/* _____________ Your Code Here _____________ */

type IsAny<T> = any


/* _____________ Test Cases _____________ */
import { Equal, Expect } from '../../utils'

type cases = [
  Expect<Equal<IsAny<any>, true>>,
  
  Expect<Equal<IsAny<undefined>, false>>,
  Expect<Equal<IsAny<unknown>, false>>,
  Expect<Equal<IsAny<never>, false>>,
  Expect<Equal<IsAny<string>, false>>,
]