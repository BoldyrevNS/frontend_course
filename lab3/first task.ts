/*
Реализуйте JavaScript функцию Array.concat используя только систему
типов. Тип принимает два аргумента. Результатом должен быть новый
массив, который содержит в себе объединение двух входных массивов.
*/
type Concat<A extends Array<any>, B extends Array<any>> = [...A, ...B];
type result = Concat<[1], [2]> // [1, 2]
type result1 = Concat<[1, 2], [3]> // [1, 2, 3]
type result2 = Concat<[1], [2, 3 , 4]> // [1, 2, 3, 4]