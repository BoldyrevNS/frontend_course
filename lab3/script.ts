// npx tsc

class First{
    private readonly arr: Array<any>

    constructor(arr: any) {
        this.arr = arr;
    }
    _exec(): any{
        return typeof this.arr[0]
    }

}

const stringArray: Array<string> = ['a', 'b', 'c']
const numberArray: Array<number> = [1, 2, 3]
const booleanArray: Array<boolean> = [true, false, true]

const str = new First(stringArray)._exec()
const num = new First(numberArray)._exec()
const boo = new First(booleanArray)._exec()

console.log(str)
console.log(num)
console.log(boo)

