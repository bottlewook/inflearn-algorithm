function solution(n, arr) {
  let answer = 0;
  let graph = Array.from(Array(n + 1), () => Array());
  let checkList = Array.from({ length: n + 1 }, () => 0);

  for (let [x, y] of arr) {
    graph[x].push(y);
  }

  function DFS(vertex) {
    if (vertex === n) answer++;
    else {
      for (let i = 0; i < graph[vertex].length; i++) {
        if (checkList[graph[vertex][i]] === 0) {
          checkList[graph[vertex][i]] = 1;
          DFS(graph[vertex][i]);
          checkList[graph[vertex][i]] = 0;
        }
      }
    }
  }

  checkList[1] = 1;
  DFS(1);
  return answer;
}

let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];
console.log(solution(5, arr));
