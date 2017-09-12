const Node = require('./node');

// Beginning spied here https://code.tutsplus.com/articles/data-structures-with-javascript-singly-linked-list-and-doubly-linked-list--cms-23392

class LinkedList {
  constructor() {
    this.length = 0;
    this._head = null;
    this._tail = null;
  }

  append(data) {
    const node = new Node(data);

    if (this.length) {
      this._tail.next = node;
      node.prev = this._tail;
      this._tail = node;
    } else {
      this._head = node;
      this._tail = node;
    }

    this.length += 1;
    return node;
  }

  head() {
    return this._head ? this._head.data : null;
  }

  tail() {
    return this._tail ? this._tail.data : null;
  }

  at(index) {
    let node = this._head;
    let currentIndex = 0;
    const len = this.length;

    if (len === 0 || index < 0 || index > (len - 1)) {
      throw new Error('Non-existent node');
    }

    while (currentIndex < index) {
      node = node.next;
      currentIndex += 1;
    }

    return node.data;
  }

  insertAt(index, data) {}

  isEmpty() {
    return this.length === 0;
  }

  clear() {
    delete this._head;
    delete this._tail;
    this.length = 0;
    this._head = null;
    this._tail = null;

    return this;
  }

  deleteAt(index) {}

  reverse() {}

  indexOf(data) {}
}

module.exports = LinkedList;
