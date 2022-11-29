/*
Реализовать тип Length, который принимает массив и возвращает длину
этого кортежа.
*/

/* _____________ Your Code Here _____________ */

type Length<T extends { length: number }> = T["length"];


/* _____________ Test Cases _____________ */

type test1 = ['test1', 'test2', 'test3', 'test 4']
type test2 = ['test1', 'test2', 'test3 ', 'test4', 'test5', 'test6']

type test1Length = Length<test1>  // 4
type test2Length = Length<test2> // 6
