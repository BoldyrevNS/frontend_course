//Реализовать функцию Array.includes из JavaScript в системе типов
//TypeScript. Этот тип принимает два тип параметра. Результатом должно
//быть либо true, либо false.
type Includes<T extends unknown[], U> = U extends T[number] ? true : false;
