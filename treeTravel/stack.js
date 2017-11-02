class Stack {
    constructor() {
        this.data = new Array();
    }

    push(node) {
        this.data.push(node);
    }

    pop() {
        return this.data.pop();
    }
}

module.exports = Stack;