// Задание №1
// Реализуйте тип, который принимает массив и возвращает его плоскую
// версию flatten (развернутые внутрениие массивы)
// type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, 5]

type Flatten<T> = T extends []
    ? []
    : T extends [infer H, ...infer T]
        ? [...Flatten<H>, ...Flatten<T>]
        :[T];
type t1 = [0, [[[1]]], [[2],3], [[4],[]], [[],[5]], [[6], [[7]]]];
type flatten = Flatten<t1>;

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

// Задание №2
//Дано число x, вернуть true, если x – палиндром

function isPalindrom(x:number): boolean{
    return x.toString()===x.toString().split('').reverse().join('');
}
console.log(isPalindrom(12345));

