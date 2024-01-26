class SinglyNode<T> {
  data: T;
  next: SinglyNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

class Singly<T> {
  private head: SinglyNode<T> | null;

  constructor() {
    this.head = null;
  }

  push = (data: T): void => {
    const newNode = new SinglyNode(data);

    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  };

  pop = (): T | undefined => {
    if (this.head === null) return undefined;

    let current = this.head;
    let previous: null | SinglyNode<T> = null;

    while (current?.next) {
      previous = current;
      current = current?.next;
    }

    if (previous) {
      previous.next = null;
    } else {
      this.head = null;
    }

    return current.data;
  };

  unshift = (data: T): void => {
    const newNode = new SinglyNode(data);
    newNode.next = this.head;
    this.head = newNode;
  };

  shift = (): T | undefined => {
    if (this.head === null) return;

    const data = this.head.data;
    this.head = this.head.next;

    return data;
  };

  length = (): number => {
    if (this.head === null) return 0;

    let length = 0;
    let current: SinglyNode<T> | null = this.head;

    while (current) {
      length++;
      current = current.next;
    }

    return length;
  };

  clear = () => {
    this.head = null;
  };
}