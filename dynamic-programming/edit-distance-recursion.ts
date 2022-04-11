/**
 * s1 and s2 are strings to find edit distance ( convert s1 to s2 )
 * m is the length of s1
 * n is the length of s2
 */
export function editDistance(s1: string, s2: string, m: number, n: number) {
  if (m === 0) {
    return n;
  }
  if (n === 0) {
    return m;
  }
  if (s1[m - 1] === s2[n - 1]) {
    // if characters are equal
    return editDistance(s1, s2, m - 1, n - 1);
  } else {
    // Insert, delete, Substitute
    return (
      1 +
      Math.min(
        editDistance(s1, s2, m, n - 1), // insert
        editDistance(s1, s2, m - 1, n), // delete
        editDistance(s1, s2, m - 1, n - 1) // substitute
      )
    );
  }
}
