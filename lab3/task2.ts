/*
leetcode: https://leetcode.com/problems/merge-two-sorted-lists/
Вариант 5
Задание 2
Вам даны два отсортированных связанных списка list1 и list2.
Объедините два списка в один отсортированный список. Список должен
быть составлен путем соединения узлов первых двух списков.
Использовать следующую реализацию:
*/

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if( list1 === null){
        return list2;
    }else if(list2===null){
        return list1;
    }

    const insert = (list: ListNode, val: ListNode)=>{
        if(val.val < list.val){
            val.next = list;
            return val;
        }

        let pointer: ListNode = list;
        while(pointer.next!= null && val.val > pointer.next.val){
            pointer = pointer.next;
        }

        val.next = pointer.next;
        pointer.next = val;

        return list;
    }

    while(list2 !== null){
        let temp2: ListNode | null = list2.next;
        list1 = insert(list1, list2)
        list2 = temp2;
    }

    return list1;

}
let l3 = new ListNode(2, null);

let l1 = new ListNode(2, null);
let l2 = new ListNode(1, l3);

let result = mergeTwoLists(l1, l2);
console.log(result);