/*
  472 - Tuple to Enum Object
  -------
  ### Question
  
  枚举是TypeScript的原始语法(它在JavaScript中不存在)。经过翻译后，它被转换成如下形式:
  ”“js
  让操作;
  (功能(操作){
      操作系统[operingsystem ["MacOS"] = 0] = "MacOS";
      操作系统[操作系统["Windows"] = 1] = "Windows";
      操作系统[操作系统["Linux"] = 2] = "Linux";
    })(operationsystem || (operationsystem = {}));
' ' '
  在这个问题中，类型应该将给定的字符串元组转换为行为类似enum的对象。
  此外，enum的属性最好是pascal case。
  ```ts
  Enum<["macOS", "Windows", "Linux"]>
  // -> { readonly MacOS: "macOS", readonly Windows: "Windows", readonly Linux: "Linux" }
  ```
  If `true` is given in the second argument, the value should be a number literal.
  ```ts
  Enum<["macOS", "Windows", "Linux"], true>
  // -> { readonly MacOS: 0, readonly Windows: 1, readonly Linux: 2 }
  ```
*/


/* _____________ Your Code Here _____________ */

type Enum<T extends readonly string[], N extends boolean = false> = any


/* _____________ Test Cases _____________ */
import { Equal, Expect } from '../../utils'

const OperatingSystem = ['macOS', 'Windows', 'Linux'] as const
const Command = ['echo', 'grep', 'sed', 'awk', 'cut', 'uniq', 'head', 'tail', 'xargs', 'shift'] as const

type cases = [
  Expect<Equal<Enum<[]>, {}>>,
  Expect<Equal<
  Enum<typeof OperatingSystem>,
  {
    readonly MacOS: 'macOS'
    readonly Windows: 'Windows'
    readonly Linux: 'Linux'
  }
  >>,
  Expect<Equal<
  Enum<typeof OperatingSystem, true>,
  {
    readonly MacOS: 0
    readonly Windows: 1
    readonly Linux: 2
  }
  >>,
  Expect<Equal<
  Enum<typeof Command>,
  {
    readonly Echo: 'echo'
    readonly Grep: 'grep'
    readonly Sed: 'sed'
    readonly Awk: 'awk'
    readonly Cut: 'cut'
    readonly Uniq: 'uniq'
    readonly Head: 'head'
    readonly Tail: 'tail'
    readonly Xargs: 'xargs'
    readonly Shift: 'shift'
  }
  >>,
  Expect<Equal<
  Enum<typeof Command, true>,
  {
    readonly Echo: 0
    readonly Grep: 1
    readonly Sed: 2
    readonly Awk: 3
    readonly Cut: 4
    readonly Uniq: 5
    readonly Head: 6
    readonly Tail: 7
    readonly Xargs: 8
    readonly Shift: 9
  }
  >>
]