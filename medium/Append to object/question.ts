/*
  527 - Append to object
  -------
  ### Question
  
  实现向接口添加新字段的类型。该类型接受三个参数。输出应该是一个带有新字段的对象。
  
  For example
  
  ```ts
  type Test = { id: '1' }
  type Result = AppendToObject<Test, 'value', 4> // expected to be { id: '1', value: 4 }
  ```
*/

/* _____________ Your Code Here _____________ */

type AppendToObject<T, U, V> = any;

/* _____________ Test Cases _____________ */
import { Equal, Expect } from "../../utils";

type test1 = {
  key: "cat";
  value: "green";
};

type testExpect1 = {
  key: "cat";
  value: "green";
  home: boolean;
};

type test2 = {
  key: "dog" | undefined;
  value: "white";
  sun: true;
};

type testExpect2 = {
  key: "dog" | undefined;
  value: "white";
  sun: true;
  home: 1;
};

type test3 = {
  key: "cow";
  value: "yellow";
  sun: false;
};

type testExpect3 = {
  key: "cow";
  value: "yellow";
  sun: false;
  isMotherRussia: false | undefined;
};

type cases = [
  Expect<Equal<AppendToObject<test1, "home", boolean>, testExpect1>>,
  Expect<Equal<AppendToObject<test2, "home", 1>, testExpect2>>,
  Expect<
    Equal<
      AppendToObject<test3, "isMotherRussia", false | undefined>,
      testExpect3
    >
  >
];
