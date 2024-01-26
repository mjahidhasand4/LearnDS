class Stack<T> {
  private items: T[] = [];

  push = (item: T): void => {
    this.items.push(item);
  };
  pop = (): T | undefined => this.items.pop();
  last = (): T | undefined => this.items[this.items.length - 1];
  empty = (): boolean => this.items.length === 0;
}