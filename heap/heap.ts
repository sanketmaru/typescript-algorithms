export class Heap {
  private capacity: number;
  private size: number = 0;
  private arr: number[];
  constructor(capacity: number) {
    this.arr = new Array(capacity);
    this.capacity = capacity;
  }

  left(i: number) {
    return 2 * i + 1;
  }

  right(i: number) {
    return 2 * i + 2;
  }

  parent(i: number): number {
    return Math.floor((i - 1) / 2);
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
      if (this.arr[this.parent(k)] > this.arr[k]) {
        const temp = this.arr[k];
        this.arr[k] = this.arr[this.parent(k)];
        this.arr[this.parent(k)] = temp;
      }
      k = this.parent(k);
    }
  }

  /**
   * Given an array of numbers which are not in order of max heap,
   * build the heap.
   */
  buildMaxHeap(inputArr: number[], n: number) {
    for (let k = n / 2 - 1; k >= 0; k--) {
      this.maxHeapify(inputArr, n, k);
    }

  }

  /**
   * Given an array of numbers which are not in order of min heap,
   * build the heap.
   */
  buildMinHeap() {
    for (let k = (((this.size - 1) - 1) / 2); k >= 0; k--) {
      this.minHeapify(k);
    }

  }

  /**
   * Produce a min heap when root is violating the min-heap
   * Min Heap is a heap with complete binary tree and a node value
   * is less than its descendants.
   * @param i 
   */
  minHeapify(i: number) {
    // i is supposed to be zero as its violating min heap.
    // replace i with size-1 i.e last node in the tree

    const leftIndex = this.left(i);
    const rightIndex = this.right(i);
    let smallest = i;

    if (leftIndex < this.size && this.arr[leftIndex] < this.arr[i]) {
      smallest = leftIndex;
    }

    if (rightIndex < this.size && this.arr[rightIndex] < this.arr[smallest]) {
      smallest = rightIndex;
    }

    if (smallest !== i) {
      let temp = this.arr[i];
      this.arr[i] = this.arr[smallest];
      this.arr[smallest] = temp;
      this.minHeapify(smallest);
    }
  }
  maxHeapify(inputArr: number[], n: number, i: number) {
    const leftIndex = this.left(i);
    const rightIndex = this.right(i);
    let largest = i;
    if (leftIndex < n && inputArr[leftIndex] > inputArr[largest]) {
      largest = leftIndex;
    }
    if (rightIndex < n && inputArr[rightIndex] > inputArr[largest]) {
      largest = rightIndex;
    }
    if (largest !== i) {
      let temp = inputArr[i];
      inputArr[i] = inputArr[largest];
      inputArr[largest] = temp;
      this.maxHeapify(inputArr, n, largest);
    }
  }

  /**
   * Extract minimum of a min-heap.
   * @returns
   */
  extractMin(): number {
    if (this.size === 0) {
      return 0;
    }
    if (this.size === 1) {
      return this.arr[0];
    }
    const temp = this.arr[0];
    this.arr[0] = this.arr[this.size - 1];
    this.arr[this.size - 1] = temp;
    this.size--;
    this.minHeapify(0);
    return temp;
  }

  print() {
    console.log('Heap Array is', this.arr);
  }

  sortAsc(sortArr: number[]) {
    const n = sortArr.length;
    this.buildMaxHeap(sortArr, n);
    for (let i = n - 1; i > 0; i--) {
      const temp = sortArr[0];
      sortArr[0] = sortArr[i];
      sortArr[i] = temp;
      this.maxHeapify(sortArr, i, 0);
    }
    console.log('Heap Sort is', sortArr);
  }
}
