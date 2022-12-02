function wordPattern(pattern: string, s: string): boolean {
    const n = pattern.length;
    const cs = s.split(' ');
    if (n !== cs.length) {
        return false;
    }
    let arr1 = [];
    let arr2 = [];
    for (let i = 0; i < n; i++) {
        const c1 = pattern[i];
        const c2 = cs[i];
        if (!arr1.includes(c1)) {
            arr1.push(c1);
        }
        if (!arr2.includes(c2)) {
            arr2.push(c2);
        }
        if (arr1.indexOf(c1) !== arr2.indexOf(c2)) {
            return false;
        }
    }
    return true;
}