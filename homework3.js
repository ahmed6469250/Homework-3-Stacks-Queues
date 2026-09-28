
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
