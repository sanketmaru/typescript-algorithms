/**
 * Finds the depth first search of the graph
 */
export function dfs(adj: number[][], visitedArr: boolean[], start: number) {
  visitedArr[start] = true;
  console.log('DFS is', start);
  const list = adj[start];
  for (let j = 0; j < list.length; j++) {
    let v = list[j];
    if (visitedArr[v] === false) {
      dfs(adj, visitedArr, v);
    }
  }
}
