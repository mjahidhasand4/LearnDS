class Queue<T> {
  private items: T[] = [];

  enqueue = (item: T): void => {
    this.items.unshift(item);
  };

  dequeue = (): T | undefined => this.items.shift();
  first = (): T | undefined => this.items[0];
  empty = (): boolean => this.items.length === 0;
}

const queue = new Queue<{ name: string; age: number }>();

queue.enqueue({ name: "Zahid", age: 24 });
queue.enqueue({ name: "Me", age: 24 });

console.log(queue.dequeue());
