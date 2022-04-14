export class Heap {
  private capacity: number;
  private size: number = 0;
  private arr: number[];
  constructor(capacity: number) {
    this.arr = new Array(capacity);
    this.arr.fill(-1);
    console.log(this.arr);
  }

  left(i: number) {
    return 2 * i + 1;
  }

  right(i: number) {
    return 2 * i + 2;
  }

  parent(i): number {
    return Math.floor(i - 1) / 2;
  }

  insert(i: number) {
    if (this.size === this.capacity) {
      throw new Error(
        'Capacity Reached, try dynamic sized arrays or increase size'
      );
    }
    this.size++;
    this.arr[this.size - 1] = i;
    let k = this.size - 1;
    while (k !== 0) {
      if (this.arr[this.parent(i)] > this.arr[i]) {
        const temp = this.arr[i];
        this.arr[i] = this.arr[this.parent(i)];
        this.arr[this.parent(i)] = temp;
        i = this.parent(i);
      }
    }
  }

  buildHeap() {}

  minHeapify() {}

  extractMin() {}

  print() {
    console.log('Heap Array is', this.arr);
  }
}
