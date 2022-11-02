function isPalindrome(num: Number): boolean {
    let s = num.toString();
    console.log(s);
    let j = s.length - 1;
    for (let i = 0; i < j; i++, j--) {
        //while (i < j && !isAlphaNumeric(s[i])) {
        //    i++;
        //}
        //while (i < j && !isAlphaNumeric(s[j])) {
        //    j--;
        //}
        if (i < j && s[i] !== s[j]) {
            return false;
        }
        j--;
        i++;
    }
    return true;
};

//function isAlphaNumeric(value: string) {
//    return value.match(/^[A-Za-z0-9]+$/);
//}

console.log(isPalindrome(121));

