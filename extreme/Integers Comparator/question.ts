/*
  274 - Integers Comparator
  -------
  ### Question
  
  实现一个类型级整数比较器。我们提供了一个enum来指示比较结果，如下所示:

  —如果' a '大于' b '， type应该是' Comparison.Greater '。
  -如果' a '和' b '相等，type应该是' compare . equal '。
  —如果“a”小于“b”，type应为“compare . lower”。

**请注意，' a '和' b '可以是正整数或负整数或0，即使一个是正的，而另一个是负的。**
*/


/* _____________ Your Code Here _____________ */

enum Comparison {
    Greater,
    Equal,
    Lower,
  }
  
  type Comparator<A extends number, B extends number> = any
  
  
  /* _____________ Test Cases _____________ */
  import { Equal, Expect } from '../../utils'
  
  type cases = [
    Expect<Equal<Comparator<5, 5>, Comparison.Equal>>,
    Expect<Equal<Comparator<5, 6>, Comparison.Lower>>,
    Expect<Equal<Comparator<5, 8>, Comparison.Lower>>,
    Expect<Equal<Comparator<5, 0>, Comparison.Greater>>,
    Expect<Equal<Comparator<-5, 0>, Comparison.Lower>>,
    Expect<Equal<Comparator<0, 0>, Comparison.Equal>>,
    Expect<Equal<Comparator<0, -5>, Comparison.Greater>>,
    Expect<Equal<Comparator<5, -3>, Comparison.Greater>>,
    Expect<Equal<Comparator<5, -7>, Comparison.Greater>>,
    Expect<Equal<Comparator<-5, -7>, Comparison.Greater>>,
    Expect<Equal<Comparator<-5, -3>, Comparison.Lower>>,
    Expect<Equal<Comparator<-25, -30>, Comparison.Greater>>,
    Expect<Equal<Comparator<15, -23>, Comparison.Greater>>,
    Expect<Equal<Comparator<40, 37>, Comparison.Greater>>,
    Expect<Equal<Comparator<-36, 36>, Comparison.Lower>>,
    Expect<Equal<Comparator<27, 27>, Comparison.Equal>>,
    Expect<Equal<Comparator<-38, -38>, Comparison.Equal>>,
  ]  