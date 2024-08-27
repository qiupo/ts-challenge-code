
/* _____________ 你的代码 _____________ */

type Length<T extends any> = T extends readonly any[] ? T["length"] : never;

/* _____________ 测试用例 _____________ */
import { Equal, Expect } from "../../utils";

const tesla = ["tesla", "model 3", "model X", "model Y"] as const;
type a = Length<typeof tesla>;

const spaceX = [
  "FALCON 9",
  "FALCON HEAVY",
  "DRAGON",
  "STARSHIP",
  "HUMAN SPACEFLIGHT",
] as const;

type cases = [
  Expect<Equal<Length<typeof tesla>, 4>>,
  Expect<Equal<Length<typeof spaceX>, 5>>,
  // @ts-expect-error
  Length<5>,
  // @ts-expect-error
  Length<"hello world">
];
