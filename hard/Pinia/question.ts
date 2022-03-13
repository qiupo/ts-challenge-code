/*
  1290 - Pinia
  -------
  ### Question
  
  创建一个类型级函数，其类型类似于[Pinia](https://github.com/posva/pinia)库。你不需要实现函数，只需要添加类型。  
  ### Overview
  
  这个函数只接收一个类型为对象的参数。该对象包含4个属性:

  - ' id ' -只是一个字符串(必需的)
  - ' state ' -一个函数，将返回一个对象作为存储的状态(必需的)
  - ' getters ' -一个具有类似于Vue的计算值或Vuex的getter方法的对象，详细信息如下(可选)
  - ' actions ' -一个带有方法的对象，可以产生副作用和改变状态，详细信息如下(可选)

  ### Getters
  
  When you define a store like this:
  
  ```typescript
  const store = defineStore({
    // ...other required fields
    getters: {
      getSomething() {
        return 'xxx'
      }
    }
  })
  ```
  
  你应该这样使用它:
  
  ```typescript
  store.getSomething
  ```
  
  instead of:
  
  ```typescript
  store.getSomething()  // error
  ```
  
  此外，getter可以通过' this '访问state和/或其他getter，但state是只读的。  
  ### Actions
  
  当你这样定义一个商店时:  
  ```typescript
  const store = defineStore({
    // ...other required fields
    actions: {
      doSideEffect() {
        this.xxx = 'xxx'
        return 'ok'
      }
    }
  })
  ```
  
  使用它只是为了调用它:  
  ```typescript
  const returnValue = store.doSideEffect()
  ```
  动作可以返回任何值，也可以不返回任何值，并且可以接收任意数量的不同类型的参数。
  参数类型和返回类型不能丢失，这意味着类型检查必须在调用端可用。

  状态可以通过“this”来访问和改变。getter可以通过' this '访问，但它们是只读的。
*/


/* _____________ Your Code Here _____________ */

declare function defineStore(store: unknown): unknown


/* _____________ Test Cases _____________ */
import { Equal, Expect } from '../../utils'

const store = defineStore({
  id: '',
  state: () => ({
    num: 0,
    str: '',
  }),
  getters: {
    stringifiedNum() {
      // @ts-expect-error
      this.num += 1

      return this.num.toString()
    },
    parsedNum() {
      return parseInt(this.stringifiedNum)
    },
  },
  actions: {
    init() {
      this.reset()
      this.increment()
    },
    increment(step = 1) {
      this.num += step
    },
    reset() {
      this.num = 0

      // @ts-expect-error
      this.parsedNum = 0

      return true
    },
    setNum(value: number) {
      this.num = value
    },
  },
})

// @ts-expect-error
store.nopeStateProp
// @ts-expect-error
store.nopeGetter
// @ts-expect-error
store.stringifiedNum()
store.init()
// @ts-expect-error
store.init(0)
store.increment()
store.increment(2)
// @ts-expect-error
store.setNum()
// @ts-expect-error
store.setNum('3')
store.setNum(3)
const r = store.reset()

type _tests = [
  Expect<Equal<typeof store.num, number>>,
  Expect<Equal<typeof store.str, string>>,
  Expect<Equal<typeof store.stringifiedNum, string>>,
  Expect<Equal<typeof store.parsedNum, number>>,
  Expect<Equal<typeof r, true>>
]