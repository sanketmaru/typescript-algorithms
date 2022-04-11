/** This function returns lis in O(n2) time and space complexity is O(n);
 * [3, 4, 2, 8, 10] = 4
 */
export function longestIncreasingSubsequence(arr: number[]) {
  let lis: number[] = []; // [1, 2, 1, 3, 4]
  lis[0] = 1;

  for (let i = 1; i < arr.length; i++) {
    lis[i] = 1;
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j]) {
        lis[i] = Math.max(lis[i], lis[j] + 1);
      }
    }
  }
  let res = lis[0];
  for (let i = 1; i < lis.length; i++) {
    res = Math.max(lis[i], res);
  }
  return res;
}
