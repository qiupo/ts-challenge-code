/*
  3376 - InorderTraversal
  -------
  ### Question
  
  实现二叉树的类型版本的顺序遍历。  
  For example:
  
  ```typescript
  const tree1 = {
    val: 1,
    left: null,
    right: {
      val: 2,
      left: {
        val: 3,
        left: null,
        right: null,
      },
      right: null,
    },
  } as const
  
  type A = InorderTraversal<typeof tree1> // [1, 3, 2]
  ```
*/


/* _____________ Your Code Here _____________ */

interface TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
  }
  type InorderTraversal<T extends TreeNode | null> = any
  
  
  /* _____________ Test Cases _____________ */
  import { Equal, Expect, ExpectFalse, NotEqual } from '../../utils'
  
  const tree1 = {
    val: 1,
    left: null,
    right: {
      val: 2,
      left: {
        val: 3,
        left: null,
        right: null,
      },
      right: null,
    },
  } as const
  
  const tree2 = {
    val: 1,
    left: null,
    right: null,
  } as const
  
  const tree3 = {
    val: 1,
    left: {
      val: 2,
      left: null,
      right: null,
    },
    right: null,
  } as const
  
  const tree4 = {
    val: 1,
    left: null,
    right: {
      val: 2,
      left: null,
      right: null
    }
  } as const
  
  type cases = [
    Expect<Equal<InorderTraversal<null>, []>>,
    Expect<Equal<InorderTraversal<typeof tree1>, [1, 3, 2]>>,
    Expect<Equal<InorderTraversal<typeof tree2>, [1]>>,
    Expect<Equal<InorderTraversal<typeof tree3>, [2, 1]>>,
    Expect<Equal<InorderTraversal<typeof tree4>, [1, 2]>>,
  ]  