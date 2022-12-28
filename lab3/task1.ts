//5 вариант
/*
Задание 1
Реализовать встроенный тип Exclude<T, U>
type T0 = Exclude<"a" | "b" | "c", "a">; // "b" | "c"
type T1 = Exclude<"a" | "b" | "c", "a" | "b">; // "c"
 */

type MyExclude<T, U> = T extends U ? never : T;
type T0 = MyExclude<"a" | "b" | "c", "a">; // "b" | "c"
type T1 = MyExclude<"a" | "b" | "c", "a" | "b">; // "c"

