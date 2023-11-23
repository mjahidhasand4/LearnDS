/** Singly Linked List */

class SinglyNode<T> {
  public data: T;
  public next: SinglyNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

class Singly<T> {
  private head: SinglyNode<T> | null;
  public values: T[];

  constructor() {
    this.head = null;
    this.values = [];
  }

  public push = (data: T) => {
    const newNode = new SinglyNode(data);

    if (this.head === null) {
      this.head = newNode;
      this.values.push(data);
      return;
    }

    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }

    current.next = newNode;
    this.values.push(data);
  };

  public pop = () => {
    if (this.head === null) return undefined;

    let previous: SinglyNode<T> | null = null;
    let current = this.head;
    while (current.next !== null) {
      previous = current;
      current = current.next;
    }

    if (previous?.next === null) {
      this.head = null;
    } else {
      previous!.next = null;
    }

    this.values.pop();
    return current.data;
  };

  public unshift = (data: T) => {
    const newNode = new SinglyNode(data);

    if (this.head === null) {
      this.head = newNode;
      this.values.unshift(data);
      return;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.values.unshift(data);
    }
  };

  public shift = () => {
    if (this.head === null) return undefined;
    let data = this.head.data;
    this.head = this.head.next;
    this.values.shift();

    return data;
  };

  public clear = (): void => {
    this.head = null;
  };

  public print = (): void => {
    let data: T[] = [];

    let current = this.head;
    while (current !== null) {
      data.push(current.data);
      current = current.next;
    }

    console.log(data);
  };
}

/** Doubly Linked List */

class DoublyNode<T> {
  public data: T;
  public previous: DoublyNode<T> | null;
  public next: DoublyNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.previous = null;
    this.next = null;
  }
}

class Doubly<T> {
  private head: DoublyNode<T> | null;
  private tail: DoublyNode<T> | null;
  public values: T[];
  public length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.values = [];
    this.length = 0;
  }

  public push = (data: T): void => {
    const newNode = new DoublyNode(data);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;

      this.length += 1;
      this.values.push(data);
    } else {
      newNode.previous = this.tail;
      this.tail!.next = newNode;
      this.tail = newNode;

      this.length += 1;
      this.values.push(data);
    }
  };

  public pop = () => {
    if (this.head === null) return undefined;

    const data = this.tail?.data;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail!.previous;
      this.tail!.next = null;
    }

    this.values.pop();
    this.length -= 1;

    return data;
  };

  public unshift = (data: T) => {
    const newNode = new DoublyNode(data);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;

      this.length += 1;
      this.values.unshift(data);
    } else {
      newNode.next = this.head;
      this.head.previous = newNode;
      this.head = newNode;

      this.length += 1;
      this.values.unshift(data);
    }
  };

  public shift = () => {
    if (this.head === null) return undefined;

    const data = this.head.data;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head!.previous = null;
    }

    this.values.shift();
    this.length -= 1;

    return data;
  };

  public clear = () => {
    this.head = null;
    this.tail = null;

    this.values = [];
    this.length = 0;
  };

  public print = (reverse = false) => {
    const data: T[] = [];

    if (reverse) {
      let current = this.tail;
      while (current) {
        data.push(current!.data);
        current = current!.previous;
      }
    } else {
      let current = this.head;
      while (current) {
        data.push(current!.data);
        current = current!.next;
      }
    }

    console.log(data);
  };
}