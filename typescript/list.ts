class SinglyNode<T> {
  public data: T;
  public next: SinglyNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

class SinglyList<T> {
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