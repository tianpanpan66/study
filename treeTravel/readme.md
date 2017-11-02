# 排序2，树
## 题目
### 1. 树的遍历
请在traversal.js中使用适当的数据结构对二叉树tree进行深度优先和广度优先的先序遍历，按照遍历的顺序输出节点的value属性值。如下为相关类的公共方法和属性。提示：使用队列和栈。
````
class TreeNode {
    // 返回所有子节点
    getChildren(): Array<TreeNode>;
    value: Number;
    left: TreeNode;
    right: TreeNode;
}
class BinaryTree {
    // 返回根节点
    getRoot(): TreeNode; 
}
class Queue {
    pop(): any;
    push(any); 
}
class Queue {
    pop(): any;
    push(any); 
}
````
### 2. 快速排序
````
// code 1
var target = [2, 4, 6, 8, 4, 3, 4, 7, 9];
quickSort(target);
function quickSort(array) {

    // TODO: 最小问题的解决方案
    if (array.length <= 1) {
        return array;
    } else if (array.length === 2 && array[0] === array[1]) {
        return array;
    }
    
    // TODO: 问题拆解逻辑
    let flag = array[1];
    let small = [];
    let large = [];
    for (let i = 0; i <array.length; ++i) {
        if (flag >= array[i]) {
            small.push(array[i]);
        } else {
            large.push(array[i]);
        }
    }
    return quickSort(small).concat(quickSort(large));
    
}
````
修改code 1，使之成为一个完整的快速排序算法的实现。

### 3*. 快速排序的优化
请尝试使用一个数组实现快速排序。
````
// code 3
var target = [2, 4, 6, 8, 4, 3, 4, 7, 9];
quickSort(0, target.length - 1);
function quickSort(from, to) {
    // TODO: 最小问题的解决方案
    // Your code here
    
    // TODO: 问题拆解逻辑
    for (let i = from; i < to; ++i) {
        // Your code here
    }
}
````
