//Реализовать функцию Array.push на уровне системы типов.

type Push<A extends Array<any>, B extends any> = [...A, ...[B]];

type Result1 = Push<[1, 2], "3">; // [1, 2, '3']
type Result2 = Push<["1", true, 3, 63512678.34734], "3">; 
type Result3 = Push<[1, 2], ["3"]>; 


/*
    https://leetcode.com/problems/happy-number/
*/

function isHappy(n: number): boolean {
    const alreadyBeen: Set<number> = new Set<number>();

    const getHappy = (n:number) => {
      let sum: number = 0;
      while(n > 0){
        sum+=(n%10)**2;
        n=Math.trunc(n/10);
      }
      return sum;
    }
    while(n!==1 && !alreadyBeen.has(n)){
      alreadyBeen.add(n);
      n=getHappy(n);
    }


    return n===1;
};
