/*
  2828 - ClassPublicKeys
  -------
  ### Question
  
  实现泛型的' classpblickeys <T> '，它返回一个类的所有公钥。  
  For example:
  
  ```ts
  class A {
    public str: string
    protected num: number
    private bool: boolean
    getNum() {
      return Math.random()
    }
  }
  
  type publicKyes = ClassPublicKeys<A> // 'str' | 'getNum'
  ```
*/


/* _____________ Your Code Here _____________ */

type ClassPublicKeys = any


/* _____________ Test Cases _____________ */
import { Equal, Expect, ExpectFalse, NotEqual } from '../../utils'

class A {
  public str: string
  protected num: number
  private bool: boolean
  constructor() {
    this.str = 'naive'
    this.num = 19260917
    this.bool = true
  }
  getNum() {
    return Math.random()
  }
}

type cases = [
  Expect<Equal<ClassPublicKeys<A>, 'str' | 'getNum'>>
]