/* Задания 2 номер 7 ""Удалите повторяющиеся элементы из массива чисел" */
const removeDuplicates =  function(nums: number[]): number {
    let i: number = 0
    for (let j = 0; j < nums.length; j++) {
      if(nums[j] !== nums[i]) {
        i++
        nums[i] = nums[j]
      }
    }
    nums.splice(i+1)
    console.log(nums)
    console.log(nums.length)
    return i + 1
  }
  
  removeDuplicates([0,0,1,1,1,2,2,3,3,4]);
  