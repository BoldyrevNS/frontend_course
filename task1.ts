// Реализовать вспомогательный тип If. Он принимает условие C и
// типы T и F. Если условие C правдивое, верните тип T, иначе - F.
type T = number;
type F = string;
type If<C, T, F> = C extends true ? T : F;
let a:If<true, T, F> = 5;
let b:If<false, T, F> = '5';
console.log(a,b);