//Реализовать функцию Array.includes из JavaScript в системе типов
//TypeScript. Этот тип принимает два тип параметра. Результатом должно
//быть либо true, либо false.
type T = number[];
type U = number[];
type Includes<T extends unknown[], U> = U extends T[number] ? true : false;
let isPillarMen: Includes<["Test0", "Test1", "Test2", "Test3"], "Test123">  = true;
console.log(isPillarMen);
