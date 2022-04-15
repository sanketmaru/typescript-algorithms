import { binarySearch } from './binary-search';
import { quicksort } from './sorting/quick-sort';
import { editDistance as eD } from './dynamic-programming/edit-distance-recursion';

import { longestCommonSubsequence as lcs } from './dynamic-programming/longest-common-subsequence';
import { longestCommonSubsequence as lcsMemo } from './dynamic-programming/longest-common-subsequence-memo';

import { longestIncreasingSubsequence as lis } from './dynamic-programming/longest-increasing-subsequence';

import { createAdjacentList, addEdge } from './graphs/common';
import { dfs } from './graphs/dfs';
import { bfs } from './graphs/bfs';

import { Heap } from './heap/heap';

const arr = [1, 2, 33, 31, 1, 2, 63, 123, 6, 32, 943, 346, 24];
const arr1 = [10, 5, 2, 4];

function binarySearchExecute() {
  const index = binarySearch(arr, 7);
  console.log(`Index is`, index);
}

function quicksortExecute() {
  let res = quicksort(arr1);
  // res = [].concat(...res);
  console.log(`Quicksort result: `, res.flat());
}

function editDistanceExecute() {
  const s1 = 'AXYZ',
    s2 = 'BAZ';
  const n = s2.length,
    m = s1.length;
  console.log('Edit Distance is ', eD(s1, s2, m, n));
}

function lcsExecute() {
  const s1 = 'AXYZ',
    s2 = 'BAZ';
  const n = s2.length,
    m = s1.length;
  console.log('Longest Common Subsequence is', lcs(s1, s2, m, n));

  let memoArray = [];
  for (let i = 0; i < m + 1; i++) {
    memoArray[i] = new Array(n + 1);
    memoArray[i].fill(-1);
  }
  console.log(
    'Longest Common Subsequence Memoized is',
    lcsMemo(s1, s2, m, n, memoArray)
  );
}

function lisExecute() {
  console.log('Longest Increasing Subsequence is ', lis([3, 4, 2, 8, 10]));
}

function dfsExecute() {
  /**
 * 0-1-4
   | | /
   2-3/
 */
  const size = 7;
  let adj = createAdjacentList(size);
  addEdge(adj, 0, 1);
  addEdge(adj, 0, 2);
  addEdge(adj, 2, 3);
  addEdge(adj, 1, 3);
  addEdge(adj, 1, 4);
  addEdge(adj, 3, 4);
  let visitedArr = [];
  for (let i = 0; i < size; i++) {
    visitedArr[i] = false;
  }
  console.log('Adj list is ', adj);
  console.log('Depth first search is', dfs(adj, visitedArr, 0));
}

function bfsExecute() {
  const size = 7;
  let adj = createAdjacentList(size);
  addEdge(adj, 0, 1);
  addEdge(adj, 0, 2);
  addEdge(adj, 1, 2);
  addEdge(adj, 2, 3);
  addEdge(adj, 1, 3);
  addEdge(adj, 3, 4);
  addEdge(adj, 2, 4);
  let visitedArr = [];
  for (let i = 0; i < size; i++) {
    visitedArr[i] = false;
  }
  console.log('Adj list is ', adj);
  console.log('Breadth first search is', bfs(adj, visitedArr, 0));
}

function minHeapExecute() {
  const heap = new Heap(11);
  heap.insert(3);
  heap.insert(2);
  heap.insert(15);
  heap.insert(20);
  heap.print();
  console.log('Extracting minimum of heap', heap.extractMin());
  heap.print();


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
  console.log('Extracting minimum of heap', heap1.extractMin());
  heap1.print();
}

function heapSortExecute() {
  const heap = new Heap(11);
  const arr: number[] = [12, 11, 13, 5, 6, 7];
  heap.sortAsc(arr);
}

function execute(callback) {
  console.log('Executing algorithm', callback.name);
  callback();
}

execute(heapSortExecute);
