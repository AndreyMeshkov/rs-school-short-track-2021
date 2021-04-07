const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.queue = [];
    this.head = null;
    this.tail = null;
  }

  get size() {
    return this.queue.length;
  }

  enqueue(element) {
    const node = new ListNode();
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.queue.push(element);
  }

  dequeue() {
    return this.queue.shift();
  }
}

module.exports = Queue;
