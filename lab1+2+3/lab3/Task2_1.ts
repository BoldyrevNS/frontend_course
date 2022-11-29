/*
Дан паттерн в виде строки, состоящей из строчных английских букв.
Дана строка, состоящая из слов, разделённых пробелом. Определить,
соответствует ли данная строка данному паттерну.
Например:
pattern = "abba", s = "dog cat cat dog". True
pattern = "abba", s = "dog cat cat fish". False
pattern = "aaaa", s = "dog cat cat dog". False

https://leetcode.com/problems/word-pattern/description/
 */

function wordPattern(pattern: string, s: string): boolean {
    let n = pattern.length;
    let values = s.split(' ');
    if (n != values.length) return false;
    let table = new Array(128);
    for (let i = 0; i < n; i++) {
        let k = pattern.charCodeAt(i),
            v = values[i];
        if (!table[k]) {
            if (table.includes(v)) return false;
            table[k] = v;
        } else {
            if (table[k] != v) return false;
        }
    }
    return true;
}