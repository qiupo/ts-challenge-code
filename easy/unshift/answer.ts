type Unshift<T, U> = T extends unknown[] ? [U, ...T] : never;
