/*
  213 - Vue Basic Props
  -------
  ### Question
  
 **这个挑战从[6 - Simple Vue](//tsch.js.org/6)，你应该先完成那个，并在此基础上修改你的代码来开始这个挑战**。

 除了Simple Vue，我们现在在选项中有一个新的“props”字段。这是Vue的“道具”选项的简化版本。以下是一些规则。

 ' props '是一个包含每个字段的对象，作为注入到' this '中的真实道具的键。注入的道具可以在所有上下文中访问，包括' data '、' computed '和' methods '。

 prop可以由构造函数定义，也可以由带有“type”字段的对象定义。

  For example
  
  ```js
  props: {
    foo: Boolean
  }
  // or
  props: {
    foo: { type: Boolean }
  }
  ```
  
  should be inferred to `type Props = { foo: boolean }`.
  
  When passing multiple constructors, the type should be inferred to a union.
  
  ```ts
  props: {
    foo: { type: [Boolean, Number, String] }
  }
  // -->
  type Props = { foo: boolean | number | string }
  ```
  
  When an empty object is passed, the key should be inferred to `any`.
  
  For more specified cases, check out the Test Cases section.
  
  > `required`, `default`, and array props in Vue are not considered in this challenge.

*/


/* _____________ Your Code Here _____________ */

declare function VueBasicProps(options: any): any


/* _____________ Test Cases _____________ */
import { Equal, Expect, IsAny, Debug } from '../../utils'

class ClassA {}

VueBasicProps({
  props: {
    propA: {},
    propB: { type: String },
    propC: { type: Boolean },
    propD: { type: ClassA },
    propE: { type: [String, Number] },
    propF: RegExp,
  },
  data(this) {
    type PropsType = Debug<typeof this>
    type cases = [
      Expect<IsAny<PropsType['propA']>>,
      Expect<Equal<PropsType['propB'], string>>,
      Expect<Equal<PropsType['propC'], boolean>>,
      Expect<Equal<PropsType['propD'], ClassA>>,
      Expect<Equal<PropsType['propE'], string | number>>,
      Expect<Equal<PropsType['propF'], RegExp>>,
    ]

    // @ts-expect-error
    this.firstname
    // @ts-expect-error
    this.getRandom()
    // @ts-expect-error
    this.data()
  
    return {
      firstname: 'Type',
      lastname: 'Challenges',
      amount: 10,
    }
  },
  computed: {
    fullname() {
      return `${this.firstname} ${this.lastname}`
    },
  },
  methods: {
    getRandom() {
      return Math.random()
    },
    hi() {
      alert(this.fullname.toLowerCase())
      alert(this.getRandom())
    },
    test() {
      const fullname = this.fullname
      const propE = this.propE
      type cases = [
        Expect<Equal<typeof fullname, string>>,
        Expect<Equal<typeof propE, string | number>>,
      ]
    },
  },
})