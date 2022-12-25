// npx tsc

type First = Array<any>

const stringArray: Array<string> = ['a', 'b', 'c']
const numberArray: Array<number> = [1, 2, 3]
const booleanArray: Array<boolean> = [true, false, true]

const str: First = stringArray
const num: First = numberArray
const bln: First = booleanArray

console.log(typeof str[0])
console.log(typeof num[0])
console.log(typeof bln[0])
