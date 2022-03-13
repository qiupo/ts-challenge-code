/*
  17 - 柯里化 1
  -------
  ### 题目
  
  >在此挑战中建议使用TypeScript 4.0
  
  [Currying]（https://en.wikipedia.org/wiki/Currying）是一种将带有多个参数的函数转换为每个带有一个参数的函数序列的技术。
  
  例如：
  
  ```ts
  const add = (a: number, b: number) => a + b
  const three = add(1, 2)
  
  const curriedAdd = Currying(add)
  const five = curriedAdd(2)(3)
  ```
  
  传递给`Currying`的函数可能有多个参数，您需要正确键入它。
  
  在此挑战中，curried函数一次仅接受一个参数。分配完所有参数后，它应返回其结果。

*/


/* _____________ 你的代码 _____________ */

declare function Currying(fn: any): any


/* _____________ 测试用例 _____________ */
import { Equal, Expect } from '../../utils'

const curried1 = Currying((a: string, b: number, c: boolean) => true)
const curried2 = Currying((a: string, b: number, c: boolean, d: boolean, e: boolean, f: string, g: boolean) => true)

type cases = [
  Expect<Equal<
    typeof curried1, (a: string) => (b: number) => (c: boolean) => true
  >>,
  Expect<Equal<
    typeof curried2, (a: string) => (b: number) => (c: boolean) => (d: boolean) => (e: boolean) => (f: string) => (g: boolean) => true
  >>,
]