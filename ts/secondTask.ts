function isPalindrome(num: Number): boolean {
    let s = num.toString();
    console.log(s);
    let j = s.length - 1;
    for (let i = 0; i < j; i++, j--) {
        if (i < j && s[i] !== s[j]) {
            return false;
        }
        j--;
        i++;
    }
    return true;
};


console.log(isPalindrome(121));

