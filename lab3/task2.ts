/*
Учитывая массив целых чисел nums и целочисленное целевое значение
target, верните индексы двух чисел так, чтобы в сумме они составляли
целевое значение.
Например:
nums = [2, 7, 11, 15]. Target = 9. [0, 1]
nums = [3, 2, 4]. Target = 6. [1, 2]
nums = [3, 3]. Target = 6. [0, 1]
*/
function twoSum(nums: number[], target: number): number[] {
    let n = nums.length
    for (let i=0; i<n-1; i++){
        for (let j=i+1; j<n; j++) {
            if (nums[i]+nums[j] == target){
                return [i , j];
            }
        }
    }

};