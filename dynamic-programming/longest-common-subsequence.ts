export function longestCommonSubsequence(
  s1: string,
  s2: string,
  m: number,
  n: number
) {
  if (m == 0 || n === 0) {
    return 0;
  }

  if (s1[m - 1] === s2[n - 1]) {
    return 1 + longestCommonSubsequence(s1, s2, m - 1, n - 1);
  } else {
    return Math.max(
      longestCommonSubsequence(s1, s2, m - 1, n),
      longestCommonSubsequence(s1, s2, m, n - 1)
    );
  }
}
