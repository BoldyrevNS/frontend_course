//Дано число x, вернуть true, если x – палиндром.

function isPalindrome(x: number): boolean {
    let result: number = 0;
    let n: number = x;
    while (n > 0) {
        result = result * 10 + n % 10;
        n = Math.trunc(n / 10);
    }
    return x === result;
};

