/* eslint max-classes-per-file: ["error", 2] */

class Node<T> {
  value: T;

  next: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

/**
 * A singly linked list
 */
class LinkedList<T> {
  head: Node<T> | null;

  constructor() {
    this.head = null;
  }

  add(value: T): void {
    let currentNode: Node<T>;
    const node = new Node(value);

    if (this.head === null) {
      this.head = node;
      return;
    }

    currentNode = this.head;

    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
  }

  find(value: T): boolean {
    let currentNode: Node<T> | null = this.head;

    if (currentNode === null) {
      return false;
    }

    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }

    return false;
  }

  delete(value: T): boolean {
    let currentNode: Node<T> | null = this.head;
    let prevNode: Node<T> | null = null;

    if (currentNode === null) {
      return false;
    }

    while (currentNode !== null) {
      if (currentNode.value === value) {
        if (prevNode !== null) {
          prevNode.next = currentNode.next;
        } else {
          this.head = currentNode.next;
        }
        currentNode = null;
        return true;
      }
      prevNode = currentNode;
      currentNode = currentNode.next;
    }

    return false;
  }

  items(): Array<T> {
    let currentNode: Node<T> | null = this.head;
    const list: Array<T> = [];
    if (currentNode === null) {
      return [];
    }

    while (currentNode !== null) {
      list.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return list;
  }
}

export default LinkedList;
