/**
 * Creates the adjacentList of the graph
 */
export function createAdjacentList(size: number) {
  let arr = [];

  for (let i = 0; i < size; i++) {
    arr[i] = new Array();
    arr[i].fill(-1);
  }
  return arr;
}

export function addEdge(list: number[][], u: number, v: number) {
  const arr = list[u];
  arr.push(v);
  const arr1 = list[v];
  arr1.push(u);
}
