/*
leetcode: https://leetcode.com/problems/merge-two-sorted-lists/
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

function mergeTwoLists(listFirst: ListNode | null, listSecond: ListNode | null): ListNode | null {
    if( listFirst === null){
        return listSecond;
    }else if(listSecond===null){
        return listFirst;
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

    while(listSecond !== null){
        let temp2: ListNode | null = listSecond.next;
        listFirst = insert(listFirst, listSecond)
        listSecond = temp2;
    }

    return listFirst;
}
