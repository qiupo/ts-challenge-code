/*
  151 - Query String Parser
  -------
  ### Question
  
  您需要实现一个类型级解析器来将URL查询字符串解析为对象文字类型。

  一些详细需求:
  -查询字符串中的键值可以被忽略，但仍然被解析为' true '。例如，" key' '没有值，所以解析器的结果是' {key: true} '。
  —重复的密钥必须合并成一个。如果具有相同键的值不同，则必须将值合并为元组类型。
  —当一个键只有一个值时，该值不能被包装成元组类型。
  —如果同一个键的值多次出现，则必须将其视为一次。例如，' key=value&key=value '必须只被视为' key=value '。
*/


/* _____________ Your Code Here _____________ */

type ParseQueryString = any


/* _____________ Test Cases _____________ */
import { Equal, Expect } from '../../utils'

type cases = [
  Expect<Equal<ParseQueryString<''>, {}>>,
  Expect<Equal<ParseQueryString<'k1'>, { k1: true }>>,
  Expect<Equal<ParseQueryString<'k1&k1'>, { k1: true }>>,
  Expect<Equal<ParseQueryString<'k1&k2'>, { k1: true, k2: true }>>,
  Expect<Equal<ParseQueryString<'k1=v1'>, { k1: 'v1' }>>,
  Expect<Equal<ParseQueryString<'k1=v1&k1=v2'>, { k1: ['v1', 'v2'] }>>,
  Expect<Equal<ParseQueryString<'k1=v1&k2=v2'>, { k1: 'v1', k2: 'v2' }>>,
  Expect<Equal<ParseQueryString<'k1=v1&k2=v2&k1=v2'>, { k1: ['v1', 'v2'], k2: 'v2' }>>,
  Expect<Equal<ParseQueryString<'k1=v1&k2'>, { k1: 'v1', k2: true }>>,
  Expect<Equal<ParseQueryString<'k1=v1&k1=v1'>, { k1: 'v1' }>>
]