//Реализовать функцию Array.push на уровне системы типов.
//type Result = Push<[1, 2], "3">; [1, 2, '3']

type Push<A extends number[], V> = [...A, V];

type Result = Push<[1, 2], '3'>;

const a: Result = [1, 2, '3'];