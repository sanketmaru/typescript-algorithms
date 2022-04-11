import { binarySearch } from './binary-search';
import { quicksort } from './sorting/quick-sort';
import { editDistance as eD } from './dynamic-programming/edit-distance-recursion';

import { longestCommonSubsequence as lcs } from './dynamic-programming/longest-common-subsequence';

import { longestCommonSubsequence as lcsMemo } from './dynamic-programming/longest-common-subsequence-memo';

import { longestIncreasingSubsequence as lis } from './dynamic-programming/longest-increasing-subsequence';

const arr = [1, 2, 33, 31, 1, 2, 63, 123, 6, 32, 943, 346, 24];
const arr1 = [10, 5, 2, 4];
// const index = binarySearch(list, 7);
// console.log(`Index is`, index);

// let res = quicksort(arr1);
// // res = [].concat(...res);
// console.log(`Quicksort result: `, res.flat());

const s1 = 'AXYZ',
  s2 = 'BAZ';
const n = s2.length,
  m = s1.length;

let memoArray = [];
for (let i = 0; i < m + 1; i++) {
  memoArray[i] = new Array(n + 1);
  memoArray[i].fill(-1);
}

console.log('Edit Distance is ', eD(s1, s2, m, n));

console.log('Longest Common Subsequence is', lcs(s1, s2, m, n));

console.log(
  'Longest Common Subsequence Memoized is',
  lcsMemo(s1, s2, m, n, memoArray)
);

console.log('Longest Increasing Subsequence is ', lis([3, 4, 2, 8, 10]));
