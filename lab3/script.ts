type First<T extends Array<any>> = T[0]

type aType = First<["1111", "2"]>
type bType = First<[31, 3]>
type cType = First<[[1,2], [3,4], [5,6]]>
