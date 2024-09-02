type FunctionPropertyNever<T> = {
    [K in keyof T]: T[K] extends Function ? never : T[K]
}
type NonFunctionPropertyNames<T> = {
    [K in keyof T as T[K] extends Function ? never : K]: T[K]
}
type dataType = NonFunctionPropertyNames<FunctionPropertyNever<A>>

class test {

    info: { a: number, b: number }[] = []
    ghost: string = 'ghost'
    go: {
        v: string
    }

    setData<U extends keyof dataType>(key: U, value: U extends keyof dataType ? dataType[U] : never) {
        (this as dataType)[key] = value;
    }

    setInfo() {
        this.setData('info', [{ a: 1, b: 2 }])
        this.setData('ghost', '2')
    }
}