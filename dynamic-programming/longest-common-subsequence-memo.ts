export function longestCommonSubsequence(
  s1: string,
  s2: string,
  m: number,
  n: number,
  memo: number[][]
) {
  if (memo[m][n] != -1) {
    return memo[n][m];
  }

  if (m == 0 || n === 0) {
    memo[m][n] = 0;
    return memo[m][n];
  }

  if (s1[m - 1] === s2[n - 1]) {
    memo[m][n] = 1 + longestCommonSubsequence(s1, s2, m - 1, n - 1, memo);
  } else {
    memo[m][n] = Math.max(
      longestCommonSubsequence(s1, s2, m - 1, n, memo),
      longestCommonSubsequence(s1, s2, m, n - 1, memo)
    );
  }
  return memo[m][n];
}
