/* 
Написать тип, который разворачивает Promise и возвращает его
внутренний тип.
type ExampleType = Promise<string>
type Result = MyAwaited<ExampleType> // string
*/

type MyAwaited<P>= P extends Promise<infer T> ? MyAwaited<T>: P;

type ExampleType = Promise<string>
type Result = MyAwaited<ExampleType> //string

type ExampleType1 = Promise<Promise<number>>

type Result1 = MyAwaited<ExampleType1> //number