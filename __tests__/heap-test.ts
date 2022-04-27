import { Heap } from '../heap/heap';

test('Heap Extract Minimum', () => {
  const heap = new Heap(11);
  heap.insert(3);
  heap.insert(2);
  heap.insert(15);
  heap.insert(20);
  heap.print();
  const minimum = heap.extractMin();
  heap.print();
  expect(minimum).toBe(2);
});

test('Heap Extract Minimum', () => {
  const heap1 = new Heap(11);
  heap1.insert(10);
  heap1.insert(15);
  heap1.insert(40);
  heap1.insert(20);
  heap1.insert(50);
  heap1.insert(45);
  heap1.insert(25);
  heap1.insert(100);
  heap1.print();
  expect(heap1.get()).toMatchObject([10, 15, 25, 20, 50, 45, 40, 100, undefined, undefined, undefined]);
  const minimum = heap1.extractMin();
  heap1.print();
  expect(minimum).toBe(10);
});

test('Heap Sort Ascending', () => {
  const heap = new Heap(6);
  const arr: number[] = [12, 11, 13, 5, 6, 7];
  heap.sortAsc(arr);
  expect(arr).toMatchObject([5, 6, 7, 11, 12, 13]);
});

test('Heap Sort Descending', () => {
  const heap = new Heap(6);
  const arr: number[] = [12, 11, 13, 5, 6, 7];
  heap.sortDesc(arr);
  expect(arr).toMatchObject([13, 12, 11, 7, 6, 5]);
});

test('Build Min Heap', () => {
  const heap = new Heap(11);
  const arr: number[] = [10, 15, 40, 20, 50, 45, 25, 100];
  heap.buildMinHeap(arr, arr.length);
  expect(arr).toMatchObject([10, 15, 25, 20, 50, 45, 40, 100]);
});

test('Max Items with given sum', () => {
  const heap = new Heap(5);
  const arr: number[] = [1, 12, 5, 111, 200];
  heap.buildMinHeap(arr, arr.length);
  const res = heap.maxItems(arr, 10);
  expect(res).toBe(2);
});


