type If<C, T, F> = C extends true ? T : F;

type ifTrue = If<true, string[], number[]>;
type ifFalse = If<false, string[], number[]>;
