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
    const n = pattern.length;
    const cs = s.split(' ');
    if (n !== cs.length) {
        return false;
    }
    const map1 = new Map<string, number>();
    const map2 = new Map<string, number>();
    for (let i = 0; i < n; i++) {
        const c1 = pattern[i];
        const c2 = cs[i];
        if (!map1.has(c1)) {
            map1.set(c1, i);
        }
        if (!map2.has(c2)) {
            map2.set(c2, i);
        }
        if (map1.get(c1) !== map2.get(c2)) {
            return false;
        }
    }
    return true;
}