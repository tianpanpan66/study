class TreeNode {
    constructor (number) {
        this.left = null;
        this.right = null;
        this.distance = number || 0;
        this.value = (this.distance + Math.random()) * 10 >> 0;
    }

    addLeft() {
        this.left = new TreeNode(this.distance + 1);
    }

    addRight() {
        this.right = new TreeNode(this.distance + 1);
    }

    deleteRight() {
        this.right = null;
    }

    deleteLeft() {
        this.left = null;
    }

    getChildren() {
        return [this.left, this.right];
    }
};
module.exports = TreeNode;