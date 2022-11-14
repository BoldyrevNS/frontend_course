//ссылка на литкод
//https://leetcode.com/problems/longest-common-prefix/

function longestCommonPrefix(strs: string[]): string {
    let prefix: string = '';
    const minLength: number = Math.min.apply(null, strs.map<number>((str: string) => str.length))

    for( let i:number = 0; i < minLength; i++){
        let j:number = 1
        while(j < strs.length && strs[j][i]===strs[j-1][i]){
            j++;
        }
        if (j !== strs.length){
            break
        }
        prefix+=strs[0][i];
    }

    return prefix;
};