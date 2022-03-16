type minusOne<T extends number, K extends unknown[]=[]> = T extends K["length"]
  ? K extends [unknown, ...infer R]
    ? R["length"]
    : never
  : minusOne<T, [unknown, ...K]>; // 减一
type one = minusOne<4>;

type addOne<
  T extends number,
  K extends unknown[] = [unknown]
> = K["length"] extends T
  ? [unknown, ...K]["length"]
  : addOne<T, [unknown, ...K]>; //加一
  
type oo = addOne<4>;

type numTotuple<T extends number, K extends unknown[]=[]> = T extends K["length"]
  ? K
  : numTotuple<T, [unknown, ...K]>; //数字转元祖

type xxx = numTotuple<4>;

type help<
  T extends number,   // 目标序列
  K extends unknown[],// 当前值    后一个的当前值 = 前一个值 + 当前值
  R extends unknown[],// 前一个值  后一个前一个值 = 当前值
  U extends number    // 当前序列
> = U extends T ? K["length"] : help<T, [...K, ...R], K, addOne<U>>; //斐波那契数列帮助函数

type Fibonacci<T extends number> = help<T, [unknown], [], 1>;

type xx = Fibonacci<3>; type xx2 = Fibonacci<8>;
