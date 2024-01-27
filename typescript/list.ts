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

  constructor() {
    this.head = null;
    this.tail = null;
  }

  push = (data: T): void => {
    const newNode = new DoublyNode<T>(data);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    this.tail!.next = newNode;
    this.tail = newNode;
  };

  pop = (): T | undefined => {
    if (this.head === null) return undefined;

    const data = this.tail?.data;
    this.tail = this.tail!.previous;

    if (this.tail) {
      this.tail.next = null;
    } else {
      this.head = null;
    }

    return data;
  };

  unshift = (data: T): void => {
    const newNode = new DoublyNode<T>(data);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    newNode.next = this.head;
    this.head.previous = newNode;
    this.head = newNode;
  };

  shift = (): T | undefined => {
    if (this.head === null) return undefined;

    const data = this.head.data;
    this.head = this.head.next;

    if (this.head) {
      this.head.previous = null;
    } else {
      this.tail = null;
    }

    return data;
  };

  length = (): number => {
    let length = 0;
    let current = this.head;

    while (current !== null) {
      length++;
      current = current.next;
    }

    return length;
  };

  clear = () => {
    this.head = null;
    this.tail = null;
  };
}