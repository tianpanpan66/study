class Queue {
    constructor() {
        this.data = new Array();
    }

    push(node) {
        this.data.push(node);
    }

    pop() {
         return this.data.shift();
    }
}

module.exports = Queue;