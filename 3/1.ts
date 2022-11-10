//Реализовать тип First<T>, который принимает на входе массив T и возвращает тип его первого элемента.

type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];

type First<T> = T extends [infer first, ...infer arr] ? first : never;

type head1 = First<arr1>
type head2 = First<arr2>

