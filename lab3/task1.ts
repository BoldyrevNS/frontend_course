// Реализуйте тип, который принимает массив и возвращает его плоскую  версию
// flatten (развернутые внутрениие массивы).

type Flatten<T> = T extends []
    ? []
    : T extends [infer H, ...infer T]
        ? [...Flatten<H>, ...Flatten<T>]
        : [T];

type flatten = Flatten<[[1, 2],[], [3, 4], [[[5]]]]> // [1, 2, 3, 4, 5]
