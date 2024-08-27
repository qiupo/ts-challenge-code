
/* _____________ 你的代码 _____________ */

type MyPick<T, U> = {[K in keyof T as K extends U ? K : never]: T[K]};

/* _____________ 测试用例 _____________ */
import { Equal, Expect } from "../../utils";

type cases = [
  Expect<Equal<Expected1, MyPick<TodoPick, "title">>>,
  Expect<Equal<Expected2, MyPick<TodoPick, "title" | "completed">>>,
  // @ts-expect-error
  MyPick<TodoPick, "title" | "completed" | "invalid">
];
type x = MyPick<TodoPick, "title" | "completed" | "invalid">
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
