/*
  3326 - BEM style string
  -------
  ### Question
  
  块、元素、修饰符方法(BEM)是CSS中常见的类命名约定。

  例如，块组件可以用' btn '表示，依赖于块的元素可以用' btn__price '表示，改变块样式的修饰符可以用' btn——big '或' btn__price——warning '表示。

  实现' BEM<B, E, M> '，从这三个参数生成字符串联合。其中' B '是字符串字面量，' E '和' M '是字符串数组(可以为空)。

*/


/* _____________ Your Code Here _____________ */

type BEM<B extends string, E extends string[], M extends string[]> = any


/* _____________ Test Cases _____________ */
import { Equal, Expect } from '../../utils'

type cases = [
  Expect<Equal<BEM<'btn', ['price'], []>, 'btn__price'>>,
  Expect<Equal<BEM<'btn', ['price'], ['warning', 'success']>, 'btn__price--warning' | 'btn__price--success' >>,
  Expect<Equal<BEM<'btn', [], ['small', 'medium', 'large']>, 'btn--small' | 'btn--medium' | 'btn--large' >>,
]