/*
  custom - class function
  -------
  ### Question
  
  定义一个类，其中的有一个setData函数，需要接收两个参数，第一个参数是属性名，第二个是属性值，需要提供正确的提示
  
  ```
*/


/* _____________ Your Code Here _____________ */

class classFunction {

  info: { a: number, b: number }[] = []
  ghost: string = 'ghost'
  go: {
      v: string
  }

  setData(key, value) {
      this[key] = value;
  }

  setInfo() {
      this.setData('go', [{ a: 1, b: 2 }])
      this.setData('info', '2')
  }
}