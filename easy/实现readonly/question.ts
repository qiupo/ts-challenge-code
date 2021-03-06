/*
  7 - 实现 Readonly
  -------
  ### 题目
  
  不要使用内置的`Readonly<T>`，自己实现一个。
  
  该 `Readonly` 会接收一个 _泛型参数_，并返回一个完全一样的类型，只是所有属性都会被 `readonly` 所修饰。
  
  也就是不可以再对该对象的属性赋值。
  
  例如：
  
  ```ts
  interface Todo {
    title: string
    description: string
  }
  
  const todo: MyReadonly<Todo> = {
    title: "Hey",
    description: "foobar"
  }
  
  todo.title = "Hello" // Error: cannot reassign a readonly property
  todo.description = "barFoo" // Error: cannot reassign a readonly property
  ```
  
*/

/* _____________ 你的代码 _____________ */

type MyReadonly<T> = any;

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
