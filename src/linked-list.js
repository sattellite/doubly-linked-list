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
    return this._head.data;
  }

  tail() {
    return this._tail.data;
  }

  at(index) {}

  insertAt(index, data) {}

  isEmpty() {}

  clear() {}

  deleteAt(index) {}

  reverse() {}

  indexOf(data) {}
}

module.exports = LinkedList;
