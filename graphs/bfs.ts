import { Queue } from '../ds/queue';
export function bfs(adj: number[][], visitedArr: boolean[], start: number) {
  console.log('Breadth first Search ');
  visitedArr[start] = true;
  const queue = new Queue<number>();
  queue.enqueue(start);
  while (queue.size() !== 0) {
    const item = queue.dequeue();
    console.log(`${item} `);
    // get adjacent of polled item
    const items = adj[item];
    items.forEach((item) => {
      const adjItem = item;
      if (visitedArr[adjItem] === false) {
        visitedArr[adjItem] = true;
        queue.enqueue(adjItem);
      }
    });
  }
}
