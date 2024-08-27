
/* _____________ 你的代码 _____________ */

type DeepReadonly<T> = { readonly [K in keyof T]: keyof T[K] extends never ? T[K] : DeepReadonly<T[K]> }

/* _____________ 测试用例 _____________ */
import { Equal, Expect } from '../../utils'

type cases = [
    Expect<Equal<DeepReadonly<X>, Expected>>,
]

type X = {
    a: () => 22
    b: string
    c: {
        d: boolean
        e: {
            g: {
                h: {
                    i: true
                    j: 'string'
                }
                k: 'hello'
            }
        }
    }
}

type Expected = {
    readonly a: () => 22
    readonly b: string
    readonly c: {
        readonly d: boolean
        readonly e: {
            readonly g: {
                readonly h: {
                    readonly i: true
                    readonly j: 'string'
                }
                readonly k: 'hello'
            }
        }
    }
}