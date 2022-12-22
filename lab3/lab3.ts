//7
/*1
Реализовать функцию Array.includes из JavaScript в системе типов
TypeScript. Этот тип принимает два тип параметра. Результатом должно
быть либо true, либо false.
// `false`
type isPillarMen = Includes<["Test0", "Test1", "Test2", "Test3"], "Test123">;
*/
type MyIncludes<T extends Array<any>, U> = T extends [U] ? true 
    : T extends [infer H, ...infer T]
    ? H extends U?  true : MyIncludes<T, U>
    : false;

type isPillarMen = MyIncludes<["Kars", "Esidisi", "Wamuu", "Santana"], "JoJo">;//false
type isPillarMen1 = MyIncludes<["Kars", "Esidisi", "Wamuu", "Santana"], "Kars">;//true
type isPillarMen2 = MyIncludes<["Kars", "Esidisi", "Wamuu", "Santana"], "Wamuu">;//true
type isPillarMen3 = MyIncludes<["Kars", "Esidisi", "Wamuu", "Santana"], "Santana">;//true
type isPillarMen4 = MyIncludes<["Kars", "Esidisi", "Wamuu", "Santana"], ["Kars"]>;//false

//2
/*
Удалите повторяющиеся элементы из массива чисел.
Например:
[1, 2, 3]. [1, 2, 3]
[1, 1, 2, 2, 3, 3]. [1, 2, 3]
[]. []
*/
function removeDuplicates(nums: number[]): number[] {
    const set: Set<number> = new Set(nums);
    return Array.from(set);
};

console.log(removeDuplicates([1, 2, 3]));
console.log(removeDuplicates([1, 1, 2, 2, 3, 3]));
console.log(removeDuplicates([]));