
/* _____________ 你的代码 _____________ */

type MyReadonly<T> = { readonly [key in keyof T]: T[key]};

/* _____________ 测试用例 _____________ */
import { Equal, Expect } from "../../utils";

type cases = [Expect<Equal<MyReadonly<TodoReadonly>, Readonly<TodoReadonly>>>];

interface TodoReadonly {
    title: string;
    description: string;
    completed: boolean;
    meta: {
        author: string;
    };
}
