/*
Реализуйте JavaScript функцию Array.concat используя только систему
типов. Тип принимает два аргумента. Результатом должен быть новый
массив, который содержит в себе объединение двух входных массивов.
*/
type Concat<A extends Array<any>, B extends Array<any>> = [...A, ...B];
type result = Concat<[5], [2]> // [5, 2]
type result1 = Concat<[1, 2], [3]> // [1, 2, 3]
type result2 = Concat<[10], [0, 0, 0]> // [10, 0, 0, 0]