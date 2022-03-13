type MyPick<T,U> = {
    [key in keyof T as key extends U ?key:never]:T[key]
}