type MyPick<T, U> = {
  [key in keyof T as key extends U ? key : never]: T[key];
};

type pickTest = MyPick<TodoPick, "title" | "completed">

interface TodoPick {
    title: string;
    description: string;
    completed: boolean;
  }