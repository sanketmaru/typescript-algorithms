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
  const minimum = heap1.extractMin();
  heap1.print();
  expect(minimum).toBe(10);
});

test('Heap Sort Ascending', () => {
  const heap = new Heap(6);
  const arr: number[] = [12, 11, 13, 5, 6, 7];
  const sortedArr = heap.sortAsc(arr);
  expect(sortedArr).toMatchObject([5, 6, 7, 11, 12, 13]);
});
