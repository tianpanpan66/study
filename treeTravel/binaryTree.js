
const TreeNode = require ('./treenode.js');
class BinaryTree {
    constructor (dis) {
        this.nodes = [];
        this.nodes[0] = new TreeNode();
        let flag = 0;
        while (flag < this.nodes.length) {
            let node = this.nodes[flag];
            if (node.distance !== dis) {
                if (!node.left) {
                    node.addLeft();
                    this.nodes.push(node.left);
                }
                if (!node.right) {
                    node.addRight();
                    this.nodes.push(node.right);
                }
            }
            ++ flag;
        }
    }

    getRoot() {
        return this.nodes[0];
    }
};
module.exports = BinaryTree;