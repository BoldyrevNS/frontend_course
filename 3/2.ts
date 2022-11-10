//Имея корни двух бинарных деревьев p и q, напишите функцию,
//проверяющую, совпадают ли они или нет. Два бинарных дерева
//считаются одинаковыми, если они структурно идентичны, а узлы имеют одинаковое значение.

class TreeNode {
 val: number
 left: TreeNode | null
 right: TreeNode | null
 constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 this.val = (val===undefined ? 0 : val)
 this.left = (left===undefined ? null : left)
 this.right = (right===undefined ? null : right)
 }
}

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if(p===null && q===null){
    return true;
  }
  if(p===null || q===null){
    return false;
  }
  return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};

const p = new TreeNode(1,new TreeNode(2),new TreeNode(3))
const q = new TreeNode(1,new TreeNode(2),new TreeNode(3))

console.log(isSameTree(p,q))
