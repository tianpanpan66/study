const Queue = require ('./queue.js');
const Stack = require ('./stack.js');
const TreeNode = require ('./treenode.js');
const BinaryTree = require ('./binaryTree.js');


let tree = new BinaryTree(2);
let result = new Array();
let toReadQ = new Queue();
let toReadS = new Stack();

let root = tree.getRoot();
let children = root.getChildren();

console.log('--------------------->', root.value);
console.log('-------->', children[0].value, children[1].value);
// console.log(root.getChildren());

function travalByQueue() {
    // 广度优先搜索
   toReadQ.push(root);
   let result = [];
   result.push(root.value);
    while(toReadQ.data.length){
        let node = toReadQ.pop();
        if(node.left){
            toReadQ.push(node.left);
            result.push(node.left.value);
        }
        if(node.right){
            toReadQ.push(node.right);
            result.push(node.right.value);
        }
        
    }
    console.log(result);
    return result;

}

function travalByStack() {
    // 深度优先搜索
    toReadS.push(root);
    // 判断是否到栈底
    while(toReadS.data.length){
        let node = toReadS.pop();
        result.push(node.value);
        if(node.left){
            toReadS.push(node.left);
        }
        if(node.right){
            toReadS.push(node.right);
        }
        
    }
    console.log(result);
    return result;

}

travalByStack();
travalByQueue();