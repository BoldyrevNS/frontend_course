/*
Реализовать вспомогательный тип If. Он принимает условие C и
типы T и F. Если условие C правдивое, верните тип T, иначе - F.
Например:
type A = If<true, "a", "b">; // 'a'
type B = If<false, "a", "b">; // 'b' 
*/

type If<A extends boolean, B, C> = A extends true ? B : C;

type a = If<true, "a", "b">; // 'a'
type b = If<false, "a", "b">; // 'b'
type c = If<true, number, string>; // number
type d = If<false, {}, []>; // []