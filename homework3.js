class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

let stack = new Stack();

console.log("STACK DEMONSTRATION");
console.log("Adding:");

stack.push(15);
console.log(15);

stack.push(25);
console.log(25);

stack.push(35);
console.log(35);

stack.push(45);
console.log(45);

stack.push(55);
console.log(55);

console.log("Top item:");
console.log(stack.peek());

console.log("Removing:");
console.log(stack.pop());

console.log("Removing:");
console.log(stack.pop());

console.log("New top:");
console.log(stack.peek());

console.log("Is Stack empty?");
console.log(stack.isEmpty());


// --------------------
// Queue
// --------------------

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        return this.items.shift();
    }

    peek() {
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

let queue = new Queue();

console.log("");
console.log("QUEUE DEMONSTRATION");
console.log("Adding:");

queue.enqueue(15);
console.log(15);

queue.enqueue(25);
console.log(25);

queue.enqueue(35);
console.log(35);

queue.enqueue(45);
console.log(45);

queue.enqueue(55);
console.log(55);

console.log("Front item:");
console.log(queue.peek());

console.log("Removing:");
console.log(queue.dequeue());

console.log("Removing:");
console.log(queue.dequeue());

console.log("New front:");
console.log(queue.peek());

console.log("Is Queue empty?");
console.log(queue.isEmpty());
