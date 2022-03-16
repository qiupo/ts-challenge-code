type GetReadonlyKeys<T> = keyof {
  [key in keyof T as (<U>() => U extends { [P in key]: T[P] } ? 1 : 2) extends <U>() => U extends { readonly [P in key]: T[P] } ? 1 : 2
    ? key
    : never]: never;
};
