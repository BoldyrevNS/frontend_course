/*
Дано число, записанное римскими цифрами. Вернуть это число,
записанное арабскими цифрами.
Например:
III -> 3
LVIII -> 58
MCMXCIV -> 1994
*/

function romanToInt(s: string): number {
    const romanIntoInt: { [id: string]: number } = {};
    romanIntoInt['I'] = 1;
    romanIntoInt['V'] = 5;
    romanIntoInt['X'] = 10;
    romanIntoInt['L'] = 50;
    romanIntoInt['C'] = 100;
    romanIntoInt['D'] = 500;
    romanIntoInt['M'] = 1000;
    let sum: number = romanIntoInt[s[s.length - 1]];
    let before: number = romanIntoInt[s[0]];

    for (let i: number = 1; i < s.length; i++) {
        const current: number = romanIntoInt[s[i]];
        if (current > before) {
            sum -= before;
        } else {
            sum += before;
        }
        before = current;

    }

    return sum;
}