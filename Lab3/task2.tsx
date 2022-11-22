//2
//leetcode: https://leetcode.com/problems/two-sum
function twoSum(nums: number[], target: number): number[] {
    interface Element{
        index: number;
        num: number;
    }
    let index: number = 0;
    const elements: Element[] = nums.map<Element>((n: number) => 
    {
        return {index: index++, num: n};
    });
    elements.sort((a:Element, b:Element) =>{
        return a.num - b.num;
    });

    let left: number = 0;
    let right: number = elements.length - 1;
    let sum: number;
    do{
        sum = elements[left].num + elements[right].num;
        if(sum > target){
            right--;
        } else if(sum < target){
            left++;
        }
        

    }while(sum !== target);

    return [elements[left].index, elements[right].index];

};