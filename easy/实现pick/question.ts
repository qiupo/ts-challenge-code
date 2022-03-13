/*
  4 - 实现 Pick
  -------
  ### 题目
  
  
  实现 TS 内置的 `Pick<T, K>`，但不可以使用它。
  
  **从类型 `T` 中选择出属性 `K`，构造成一个新的类型**。
  
  例如：
  
  ```ts
  interface Todo {
    title: string
    description: string
    completed: boolean
  }
  
  type TodoPreview = MyPick<Todo, 'title' | 'completed'>
  
  const todo: TodoPreview = {
      title: 'Clean room',
      completed: false,
  }
  ```
  
*/

/* _____________ 你的代码 _____________ */

type MyPick<T, U> = any;

/* _____________ 测试用例 _____________ */
import { Equal, Expect } from "../../utils";

type cases = [
  Expect<Equal<Expected1, MyPick<TodoPick, "title">>>,
  Expect<Equal<Expected2, MyPick<TodoPick, "title" | "completed">>>,
  // @ts-expect-error
  MyPick<Todo, "title" | "completed" | "invalid">
];

interface TodoPick {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyPick<TodoPick, "title" | "completed">;

const todoPick: TodoPreview = {
  title: "Clean room",
  completed: false,
};

interface Expected1 {
  title: string;
}

interface Expected2 {
  title: string;
  completed: boolean;
}
