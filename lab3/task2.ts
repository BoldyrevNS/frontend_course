//Удалите повторяющиеся элементы из массива чисел.
function removeDuplicates(nums: number[]): number {
    let count: number=1;
    for(let i=1; i<nums.length; i++){
        if(nums[i-1] != nums[i]){
            nums[count] = nums[i];
            count++;
        }
    }
    return count;
};


let test = [1,2,3,4];
console.log(removeDuplicates(test));
